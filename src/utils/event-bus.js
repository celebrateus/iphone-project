import mitt from "mitt";
const eventBus = mitt();
function $emit(name,obj){
    eventBus.emit(name,obj);
}
function $on (name, func) {
    eventBus.on(name,func);
}
function $off(name){
    eventBus.off(name)
}
let EventBus = {$emit, $on, $off}
export default EventBus
