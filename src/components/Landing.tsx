import NextImage  from "next/image";
import titulo from "../../public/Pokemon3.webp";
import pokedexImg from "../../public/pokedex-img.webp";
import detail from "../../public/Detail.webp";
import create from "../../public/Create.webp";

export const Landing = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-8">
        <NextImage
            src={titulo}
            alt="Not Found"
            width={0}
            height={0}
            className="
            w-[320px] h-[100px] mt-4
            md:w-[500px] md:h-[150px]"
        />
        <div className="
            w-full
            space-y-8 px-11
            md:w-3/4 md:px-0"
        >
            <p 
                className="
                font-fantasy
                text-white text-base
                md:text-2xl
                "
            >
                Hello &#128512; !!! welcome to my pokedex app. Here you can search, view the specifications of each existing pokemon and create your own personalized pokemons.
            </p>
            <div 
                className="
                flex flex-col
                justify-center
                space-y-4
                pb-4
                md:flex md:flex-row md:justify-center md:space-x-7 md:space-y-0
                "
            >
                <NextImage
                    src={pokedexImg}
                    alt="Not Found"
                    width={0}
                    height={0}
                    priority={true}
                    className="
                    rounded-xl
                    md:w-[360px] md:h-64"
                />
                <NextImage
                    src={detail}
                    alt="Not Found"
                    width={0}
                    height={0}
                    priority={true}
                    className="
                    rounded-xl 
                    md:w-[360px] md:h-64"
                />
                <NextImage
                    src={create}
                    alt="Not Found"
                    width={0}
                    height={0}
                    priority={true}
                    className="
                    rounded-xl 
                    md:w-[360px] md:h-64"
                />
            </div>
        </div>
    </div>
  )
}
