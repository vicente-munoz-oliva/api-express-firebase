export default function log(message) {

    const date = new Date().toLocaleString("es-CL")

    console.log(date + ": " + message)

}