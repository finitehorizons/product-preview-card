import "./index.css";
import { AiOutlineShoppingCart } from "react-icons/ai";

const App = () => {
    return (
        <>
            <body className="bg-card-bg min-h-screen grid place-items-center min-w-full">
                <div className="w-[600px] mx-auto flex">
                    <div className="flex flex-row rounded-tl-[12px] rounded-bl-[12px] w-[50%]">
                        <img
                            src="../public/image-product-desktop.jpg"
                            alt=""
                            className="object-cover rounded-tl-[12px] rounded-bl-[12px]"
                        />
                    </div>
                    <div className="bg-white flex flex-row w-[50%] rounded-tr-[12px] rounded-br-[12px] px-10 py-6">
                        <div className="flex flex-col gap-5">
                            <p className="text-flavor-text uppercase tracking-[5px]">
                                perfume
                            </p>
                            <h2 className="text-3xl font-Fraunces hello">
                                Gabrielle Essence Eau De Parfum
                            </h2>
                            <p className="text-flavor-text tracking-tight">
                                {" "}
                                A floral, solar and voluptuous interpretation
                                composed by Olivier Polge, Perfumer-Creator for
                                the House of CHANEL.
                            </p>
                            <div className="relative flex items-center mt-1">
                                <span className="text-3xl font-Fraunces text-green-default">
                                    $149.99
                                </span>
                                <span className="line-through text-flavor-text font-Montserrat absolute text-xs right-9">
                                    $169.99
                                </span>
                            </div>
                            <button className="mt-2 w-full bg-green-default p-3 text-white font-Montserrat text-sm rounded-lg flex items-center justify-center hover:bg-button-hover-bg ">
                                <AiOutlineShoppingCart className="mr-3 font-bold" />
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </body>
        </>
    );
};

{
    /* <svg
                        width="15"
                        height="16"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M14.383 10.388a2.397 2.397 0 0 0-1.518-2.222l1.494-5.593a.8.8 0 0 0-.144-.695.8.8 0 0 0-.631-.28H2.637L2.373.591A.8.8 0 0 0 1.598 0H0v1.598h.983l1.982 7.4a.8.8 0 0 0 .799.59h8.222a.8.8 0 0 1 0 1.599H1.598a.8.8 0 1 0 0 1.598h.943a2.397 2.397 0 1 0 4.507 0h1.885a2.397 2.397 0 1 0 4.331-.376 2.397 2.397 0 0 0 1.12-2.021ZM11.26 7.99H4.395L3.068 3.196h9.477L11.26 7.991Zm-6.465 6.392a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Zm6.393 0a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Z"
                            fill="#fff"
                        />
                    </svg> */
}

export default App;
