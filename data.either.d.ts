declare module 'data.either' {
  interface EitherType<L, R> {
    // Applicative
    of<V>(value: V): Either<never, V>
    // Functor
    map<V>(fn: (value: R) => V): Either<L, V>
    // Apply
    ap<A, B>(
      this: Either<L, (value: A) => B>,
      other: Either<unknown, A>
    ): Either<L, B>
    // Chain
    chain<T, V>(fn: (value: R) => Either<T, V>): Either<L | T, V>
    // Eq
    isEqual<T, V>(either: Either<T, V>): boolean
    // Foldable
    fold<T, V>(leftFn: (value: L) => T, rightFn: (value: R) => V): T | V
    // Bifunctor
    bimap<T, V>(leftFn: (val: L) => T, rightFn: (val: R) => V): Either<T, V>
    // Catamorphism
    cata<T>(cata: { Left: (value: L) => T; Right: (value: R) => T }): T
    leftMap<T>(fn: (value: L) => T): Either<T, R>
    swap(): Either<R, L>
    // Accessors
    getOrElse<T>(elseValue: T): R | T
    orElse<A, B>(fn: (value: L) => Either<A, B>): Either<A, B | R>
  }

  interface Left<L, R> extends EitherType<L, R> {
    isLeft: true
    isRight: false
  }

  interface Right<L, R> extends EitherType<L, R> {
    isRight: true
    isLeft: false
    get(): R
  }

  type Either<L, R> = Left<L, R> | Right<L, R>

  export function Left<T>(value: T): Either<T, never>
  export function Right<T>(value: T): Either<never, T>
  export function fromNullable<T>(
    value: T | null | undefined
  ): Either<null | undefined, T>
}
