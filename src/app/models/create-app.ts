import { 
    createSSRApp, 
    type CreateAppFunction, 
    type Component
} from "vue"
import { router } from "./router"

const createApp: CreateAppFunction<Element> = (
    component,
    rootProps?
) => {
    return createSSRApp(component, rootProps)
        .use(router)
}


export { createApp }