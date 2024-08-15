import { type ICollection, ArrayCollection } from "@/shared/models/collections";
import type { ITopic } from "../topic";

export interface ISpokClient {
    getTopicsAsync(): Promise<ICollection<ITopic>>
}

export class FakeSpokClient implements ISpokClient{
    async getTopicsAsync(): Promise<ICollection<ITopic>> {
        let response = await fetch("/test-data-set/pokemons.txt");
        let pokemonsText = await response.text();
        let pokemons = pokemonsText
            .split("\n")
            .map(x => x.split(","))
        
        let topics = [];

        for(let i = 0; i < 10 ; i++){
            let pokemon = pokemons[i]
            let name = pokemon[0]
            
            let response = await fetch(`/test-data-set/images/${name}.png`)
            let array = await response.arrayBuffer()

            let image = new Blob([array], { type: "image/png" })

            let topic: ITopic = {
                title: name,
                description: pokemon[1]+pokemon[2]+pokemon[3],
                image: image
            }

            topics.push(topic)
        }

        return new ArrayCollection(topics)
    }   
}