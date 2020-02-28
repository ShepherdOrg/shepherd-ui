import { Component } from 'react'
import { darkTheme } from '../utils/colors'
import { Href } from '../gql/customTypes'

type THoverHyperlinkProps = { hyperLinks: Array<Href>, title: string }

const theme = darkTheme

function byProp(propName:string){
  return (item:any, item2: any)=>{
    return  item[propName].localeCompare(item2[propName])
  }
}


export class HoverHyperlinks extends Component<THoverHyperlinkProps, {}> {
  private hyperLinks: THoverHyperlinkProps

  constructor(hyperLinks: THoverHyperlinkProps) {
    super(hyperLinks)

    this.hyperLinks = hyperLinks

  }


  render() {
    return (
      <>
        <div className="dropdown">
          <a>
            {this.hyperLinks.title}
          </a>

          {
            (
              <div className="dropdown-content">

                {this.hyperLinks.hyperLinks.sort(byProp("title")).map((link) => <a href={link.url} target="_blank">{link.title} </a>)}

              </div>
            )
          }
        </div>
        <style jsx>{`
  .dropdown:hover {
    color: ${theme.hoverMenu.hover}  
  }
  .dropdown {
    position: relative;
    display: inline-block;
    color: ${theme.hoverMenu.normal}
  }
  
  .dropdown-content a {
    color: ${theme.link.normal}
  }
  .dropdown-content a:hover {
    color: ${theme.link.hover}
  }
  .dropdown-content {
    background-color: ${theme.hoverMenu.background};
    text-align: left;
    display: none;
    position: absolute;
    margin-top: -1em;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    padding: 12px 16px;
    z-index: 1;
  }
  
  .dropdown:hover .dropdown-content {
    display: block;
  }
`}</style>


      </>


    )
  }
}
