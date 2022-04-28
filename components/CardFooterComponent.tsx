import ButtonComponent from "./ButtonComponent";
import { Button } from 'primereact/button';


const CardFooterComponent = () => {
  return(
    <>
      <ButtonComponent icon="pi pi-heart" className="p-button-rounded p-button-help" label="Favorite"/>
      <ButtonComponent icon="pi pi-comments" className="p-button-rounded p-button-secondary ml-3" label="Favorite"/>
      <ButtonComponent icon="pi pi-share-alt" className="p-button-rounded p-button-info ml-3" label="Favorite"/>
    </>
  )
}
export default CardFooterComponent;