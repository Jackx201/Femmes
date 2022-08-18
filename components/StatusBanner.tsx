interface StatusBarComponentProps {
  /**
   * Header Displayed above Editor
   */
   status?: string;
}

const StatusBarComponent = (props: StatusBarComponentProps) => {
  
  var header = ""
  var bannerId = ""

  switch (props.status) {
    case 'Encontrada sin vida':
      header = "En memoria de:"
      bannerId = "blackStatusBanner"
      break;

      case 'Localizada':
        header = "¡Encontrada con vida!"
        bannerId = "greenStatusBanner"
        break;
  
    default:
      header = "Ayúdanos a localizarla"
      bannerId = "redStatusBanner"
      break;
  }
  return(
      <div className="container" id={bannerId}>
        <h1>{header}</h1>
      </div>
  )
}

export default StatusBarComponent;