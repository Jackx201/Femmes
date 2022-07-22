import { useRouter } from "next/router";
import HeaderComponent from "../../../components/Header";

export default function PostsPage() {
  const router = useRouter();
  return (
    <>
      <HeaderComponent></HeaderComponent>

      <div className="container" id="statusBanner">
        <h1>Ayúdanos a localizarla</h1>
      </div>

      <div className="container mt-3">
        <div className="grid">
          <div className="col picture">
            <img
              src="https://ichef.bbci.co.uk/news/640/cpsprodpb/03F8/production/_124261010_42616860-37f8-45c5-bf79-b988eb9a11e7.jpg"
              alt=""
              className="picture"
            />
          </div>

          {/* Begin Info */}
          <div className="col-8 ">
            <h1 id="nombre"> Debanhi Escobar </h1>

            <div className="user-info">
              <h5>
                <i className="mr-1 pi pi-user"></i> Publicado: Zahúl Domínguez
                el día 10/04/2022
              </h5>
            </div>

            <div className="details">
              <p>
                {" "}
                <i className="mr-1 pi pi-calendar-times"></i>{" "}
                <b> Fecha de desaparición:</b> 08/Abril/2022{" "}
              </p>
              <p>
                {" "}
                <i className="mr-1 pi pi-phone"></i> <b> Por favor informe:</b>{" "}
                8713421279
              </p>
              <p>
                {" "}
                <i className="mr-1 pi pi-map"></i> <b> Estado:</b> Nuevo León
              </p>
              <p>
                {" "}
                <i className="mr-1 pi pi-map-marker"></i>{" "}
                <b> Última vez vista:</b> Nuevo Castilla
              </p>
              <p>
                {" "}
                <i className="mr-1 pi pi-exclamation-circle"></i>{" "}
                <b> Status:</b> Desaparecida
              </p>
            </div>
            <hr />
            <p className="info">
              Debanhi Susana Escobar Bazaldúa (Monterrey, Nuevo León, 4 de
              septiembre de 2003-21 de abril de 2022), fue una joven estudiante
              de Derecho de 18 años de edad, hija de Mario Escobar y Dolores
              Bazaldúa.Alrededor de las 11 de la noche del viernes 8 de
              abril de 2022, Escobar salió de su casa para ir a una fiesta a la
              que fue acompañada por dos amigas; Saraí e Ivonne. Cerca de las 11:30,
              las tres llegaron en un taxi de plataforma digital a una reunión
              en la calle Simón Bolívar, en el centro de San Nicolás, lugar en
              donde además fueron a una tienda de autoservicio a comprar una
              botella de vodka y otros artículos para acompañar la bebida.
              Las amigas comentaron en una declaración que pidieron un automóvil 
              de la compañía didi a las 12:49del sábado 9 de abril,
              y lo abordaron a la 1:00 de la mañana, el
              cual las llevaría a una Quinta ubicada en Vía Numancia.
            </p>
          </div>
          {/* End Info */}
        </div>
      </div>
    </>
  );
}
