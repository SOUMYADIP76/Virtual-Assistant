let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")
function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="hi-GB"
    window.speechSynthesis.speak(text_speak)
}
function wish_me(){
    let day=new Date()
    hours=day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning Sir")
    }
    else if(hours>=12 && hours<16){
        speak("Good afterNoon Sir")
    }
    else{
        speak("Good Evening sir")
    }
}
window.addEventListener('load',()=>{
    // wish_me()
    document.body.classList.add('loaded');
})
let speechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition
let recognition=new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
    takCommand(transcript.toLowerCase())
}
btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"
})
function takCommand(message){
    btn.style.display="flex"
    voice.style.display="none"
    if(message.includes("hello")||message.includes("hey")){
        speak("hello sir what can i help you")
        recognition.start();
    }
    else if(message.includes("who are you")){
        speak("I am Lexi a virtual assistent, created by Soumyadip sir")
    }
    else if(message.includes("open youtube")){
        speak("opening Youtube")
        window.open("https://www.youtube.com/")
    }
    else if(message.includes("open facebook")){
        speak("opening facebook")
        window.open("https://www.facebook.com/")
    }
    else if(message.includes("open instagram")){
        speak("opening instagram")
        window.open("https://www.instagram.com/")
    }
    else if(message.includes("open whtasapp")){
        speak("opening whatsapp")
        window.open("https://web.whatsapp.com/")
    }
    else if(message.includes("open calculator")){
        speak("opening calculator")
        window.open("calculator://")
    }
    else if(message.includes("time")){
        let time=new Date().toLocaleDateString(undefined,{hour:"numeric",minute:"numeric"})
        speak(time)
    }
    else{
        speak(`this is what i found on internet regarding${message.replace("hey lexi","")}`)
        window.open(`https://www.google.com/search?q=${message}`)
    }
}