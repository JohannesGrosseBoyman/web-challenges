import { volumes } from "@/resources/lib/data";
import React from "react";
import Link from "next/link";
import Image from "next/image";



export default function BookVolumeDetail() {
    const currentVolumne = volumes.find(({slug}) => 
        slug === "the-fellowship-of-the-ring");


    const { title, description, cover, books } = currentVolumne
    




    return (
        <>
        <Link href="/volumens">All Volumens</Link>
        <h1>{title}</h1>
        <p>{description}</p>
        <ul>
            { books.map(({ ordinal, title } ) => (
            <li key={title}>
                {ordinal} : {title}
            </li>
        )) }
        </ul>
        <Image 
            src={cover}
            alt={`Cover image of ${title}`}
            width={140}
            height={230}
        ></Image>
        </>
    );
}