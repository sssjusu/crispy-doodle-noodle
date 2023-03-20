function chatgpt() {
  var frame = document.createElement('iframe'); frame.src='https://gpt-4-chat-ui.zahid.repl.co/'; frame.style.position="fixed"; frame.style.bottom="0%"; frame.style.left="0%"; frame.style.height="500px"; frame.style.width="700px"; frame.style.zIndex="0"; document.body.appendChild(frame); document.title='Rizz Academy | ChatGPT V4';
}

function cheatnetwork() {
  var frame = document.createElement('iframe'); frame.src='https://cheatnetwork.eu'; frame.style.position="fixed"; frame.style.bottom="0%"; frame.style.left="0%"; frame.style.height="500px"; frame.style.width="700px"; frame.style.zIndex="0"; document.body.appendChild(frame); document.title='Rizz Academy | Cheat Network';
}

function remove() {
   var elements = document.getElementsByTagName("iframe");

   while (elements.length) {
     elements[0].parentNode.removeChild(elements[0]);
   }
}

function websites() {
  document.body.innerHTML = "<button onclick=\"window.location.href='https://www.google.com';\">Google</button> <button onclick=\"window.location.href='https://www.github.com';\">GitHub</button> <button onclick=\"window.location.href='https://www.stackoverflow.com';\">Stack Overflow</button><button onclick=\"window.location.href='https://plantheaven.net';\">Ludicrous</button> <button onclick=\"window.location.href='https://replit.com/@Forstaken/Chrome-Emulator';\">Chrome Browser Emulator</button> <button onclick=\"window.location.href='https://terbium.johnglynn2.repl.co';\">Terbium</button> <button onclick=\"window.location.href='https://my.nextdns.io';\">Nextdns</button>";
}

function iframeopen() {
  var url = prompt("Enter URL")
  var frame = document.createElement('iframe'); 
  frame.src=url; 
  frame.style.position="fixed"; 
  frame.style.bottom="0%"; 
  frame.style.left="0%"; 
  frame.style.height="500px"; 
  frame.style.width="700px"; 
  frame.style.zIndex="100000"; 
  document.body.appendChild(frame);
}

function runJS() {
  var code = document.getElementById("js-code").value;
  eval(code);
}

function scriptrun() {
  document.body.innerHTML = "<input id='js-code' type='text'placeholder='Enter JavaScript code here'><button onclick='runJS()'>Run Code</button>";
}
