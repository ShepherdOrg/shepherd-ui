import { useCallback, useState, useEffect, useMemo } from 'react'
import { useRouter } from 'next/router'

const wait = (ms: number) => new Promise(res => setTimeout(res, ms))

export function usePageTransition() {
  const router = useRouter()
  const initialShouldReveal = Boolean(router.query.reveal)
  const [entering, setShouldEnter] = useState<boolean>(initialShouldReveal)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => setShouldEnter(false), [])

  const startExit = useCallback(async (left: () => void) => {
    setLeaving(true)
    wait(16)
      .then(() => left())
      .catch(() => {
        setLeaving(false)
      })
  }, [])

  // useMemo because useCallback discards the type
  const startExitParallel = useMemo(
    () => async <T>(parallel: () => Promise<T>, action: (value: T) => void) => {
      setLeaving(true)
      try {
        const [data] = await Promise.all([parallel(), wait(1000)])
        await action(data)
      } catch (err) {
        setLeaving(false)
      }
    },
    []
  )

  return { entering, leaving, startExit, startExitParallel }
}
