import { 
    createSSRApp, 
    type CreateAppFunction, 
    type Component
} from "vue"
import { router } from "./router"
import { FakeSpokClient } from "@/entities/api/spok-client"

const createApp: CreateAppFunction<Element> = (
    component,
    rootProps?
) => {

    let spokClinet = new FakeSpokClient()

    return createSSRApp(component, rootProps)
        .provide("spokClient", spokClinet)
        .use(router)
}


export { createApp }