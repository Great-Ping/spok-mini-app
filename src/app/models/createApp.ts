import { 
    createSSRApp, 
    type CreateAppFunction, 
    type Component
} from "vue"

const createApp: CreateAppFunction<Element> = (
    component,
    rootProps?
) => {
    return createSSRApp(component, rootProps)
}


export { createApp }