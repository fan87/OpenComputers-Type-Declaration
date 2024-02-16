


import * as os from "os"
import * as keyboard from "keyboard"
import * as computer from "computer"
import * as component from "component"
import * as colors from "colors"
import * as note from "note"
import * as thread from "thread"
import * as event from "event"

console.log(" === Basic Test === ")
console.log(`os.clock: ${os.clock()}`)
os.setenv("TEST-0000", "TEST-VALUE")
if (os.getenv("TEST-0000") != "TEST-VALUE") {
    console.error("Env Setting has Failed!")
}
console.log("Env Test: Success")
console.log("os.tmpname: " + os.tmpname())
console.log("Keycode of `0`: " + (keyboard.keys as any)["0"])
console.log("Keycode of `i`: " + keyboard.keys.i)
console.log("Key name of `0x52`: " + (keyboard.keys as any)[0x52])
console.log("Key name of `0x52`: " + (keyboard.keys as any)[0x52])
console.log("Color ID of blue: " + colors.blue)
console.log()
console.log(" === Device Info === ")
for (let [address, info] of computer.getDeviceInfo()) {
    console.log("Address: " + address)
    for (let [key, value] of info) {
        console.log(`  ${key} = ${value}`)
    }
}
console.log()
console.log(" === Component Test === ")
for (let [com, _] of component.list()) {
    console.log(`Got component: ${component.proxy(com).address}`)
}

console.log(" === Thread Test === ")

let lock = false

thread.create(() => {
    os.sleep(0.5)
    console.log("[Thread Test] This message should appear after the first message.")
    lock = true
})
console.log("[Thread Test] This message should appear first")
while (!lock) {
    os.sleep(0.1)
}
console.log("")

console.log(" === Event Test === ")
event.listen("liboc-test", () => {
    console.log("Event test has passed!")
})
event.push("liboc-test")