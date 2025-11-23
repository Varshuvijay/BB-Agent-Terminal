const terminal = document.getElementById("terminal");
const input = document.getElementById("commandInput");
const video = document.getElementById("birthdayAudio");
const img = document.getElementById("birthdayImg");
const txt = document.getElementById("birthdayTxt");



const wrapper = document.getElementById("terminal-wrapper");

function autoScroll() {
  if (!wrapper) return;
  requestAnimationFrame(() => {
    wrapper.scrollTop = wrapper.scrollHeight;
  });
}


const textarea = document.querySelector('textarea');
if (textarea) {
  textarea.addEventListener('input', function() {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
  });
}
 
const terminalQueue = [];
let typing = false;

function typeText(msg, delay = 40) { 
  terminalQueue.push({ msg, delay });
  if (!typing) {
    processQueue();
  }
}

function processQueue() {
  if (terminalQueue.length === 0) {
    typing = false;
    return;
  }

  typing = true;
  const { msg, delay } = terminalQueue.shift();
  let i = 0;
  
  const interval = setInterval(() => {
    if (i === 0) {
      const span = document.createElement("span");
      terminal.appendChild(span);
    }
  
    terminal.lastElementChild.innerHTML += msg.charAt(i);
    autoScroll();
    i++;
    if (i >= msg.length) {
      clearInterval(interval);
      terminal.innerHTML += "\n\n";
      setTimeout(autoScroll, 20);
      processQueue();
    }
  }, delay);
}


let agentName = "";
let stage = 0; 

function typeTextt(msg) {
  terminal.innerHTML += msg + "\n\n"; 
  setTimeout(() => {
    const terminalWrapper = document.getElementById("terminal-wrapper");
  }, 100);  
}

function asciiHeart() {
  return `
      .:::.   .:::.
     :::::::.:::::::
     :::::::::::::::
     ':::::::::::::'
       ':::::::::'
         ':::::'
           ':'
  `;
}

function autoScroll() {
  wrapper.scrollTop = wrapper.scrollHeight;
}


input.addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    e.preventDefault();

    const cmd = input.value.trim();
    if (!cmd) return;

    const cmdEl = document.createElement("div");
    cmdEl.textContent = "> " + cmd;
    terminal.appendChild(cmdEl);
    autoScroll();

    input.value = "";
    autoScroll(); 

    const terminalWrapper = document.getElementById("terminal-wrapper");

    // Flow Startinggggg...
    if (stage === 0 && cmd) {
      if (cmd.toLowerCase() === "vasa") {
        agentName = "VASA";
        typeText("\nHello Agent " + agentName + ",\nDecrypting special key... 🔑\nKey: LOVE-2025-FOREVER\nDecryption complete...");
        typeText("command: open gift");
        stage = 1;
      } else {
        setTimeout(() => {
          terminal.innerHTML += `<span class='red-glow'>ACCESS DENIED ❌<br>System Alert: Unauthorized access detected!</span><br>`;
          const box = document.querySelector('.black-box') || document.body;
          box.classList.add('alert');
          setTimeout(() => box.classList.remove('alert'), 200);
          typeText("\nAgent name:");
        },500);
      }
    }

    else if (stage === 1 && cmd.toLowerCase() === "open gift") {
      typeText("\nHacking birthday surprise... [▓░░░░░░░░░░░] 10%\nHacking birthday surprise... [▓▓▓▓░░░░░░░░] 40%\nAlmost there...              [▓▓▓▓▓▓▓▓░░░░] 75%\n✅ Success...               [▓▓▓▓▓▓▓▓▓▓▓▓] 100%\n\nFiles decrypted: Wishes folder");
      typeText("Opening wishes file 📂...");
      typeText("Try: play audio | open img | open txt");
      stage = 2;
    } 

    else if (stage === 2) {
      if (cmd.toLowerCase() === "play audio") {
        const msgEl = document.createElement("div");
        msgEl.textContent = "\nPlaying birthday song 🎶...";
        terminal.appendChild(msgEl);
        
        setTimeout(() => {
          const audioEl = document.createElement("audio");
          audioEl.controls = true;
          audioEl.src = "audio_1.mp3";  
          audioEl.style.display = "block";
          audioEl.style.marginTop = "10px";
          terminal.appendChild(audioEl);
          setTimeout(autoScroll, 20); 
  
          terminal.innerHTML += "\n";
          terminal.scrollTop = terminal.scrollHeight;
        },1500);
      }          

      else if (cmd.toLowerCase() === "open img") {
        const message = "\nOpening birthday image 🖼️...";
        typeText(message);

        setTimeout(() => {
          const imgEl = document.createElement("img");
          imgEl.src = "Image gift.png"; 
          imgEl.style.maxWidth = "300px";
          imgEl.style.display = "block";
          imgEl.style.borderRadius = "10px";
          imgEl.onload = () => autoScroll();  
          terminal.appendChild(imgEl);
          setTimeout(autoScroll, 20); 

          terminal.innerHTML += "\n";
          setTimeout(() => {
            const terminalWrapper = document.getElementById("terminal-wrapper");
          }, 100);  
        }, message.length * 40 + 300);
      }

      else if (cmd.toLowerCase() === "open txt") {
        setTimeout(() => {
          const txtEl = document.createElement("pre");
          txtEl.innerHTML = `
    🎉🎂 HAPPY BIRTHDAY, AGENT VASA 🎂🎉
    You’re my most secure connection ❤️
    Access Granted to My Heart 💖
    \nLoading smiles... 100% complete 😄`;
          terminal.appendChild(txtEl);

          setTimeout(autoScroll, 20);  
  

          terminal.innerHTML += "<br>";
          setTimeout(() => {
            const terminalWrapper = document.getElementById("terminal-wrapper");
          }, 100);  
          
          typeText("want know something interesting.? (Y/N)");
          stage = 7;
        }, 1000); 
      }
    }

    else if (stage === 7 && cmd.toLowerCase() === "y") {  
        typeText("\nI’ve analyzed your birthday records...\nResult : You are loved beyond measure 💖");
        typeText(asciiHeart());
        setTimeout(() => {
          terminal.innerHTML += `<span class='red-glow'>ERROR: Screen glitches..!!</span><br>`;
          terminal.classList.add("glitch");
          const box = document.querySelector('.black-box') || document.body;
          box.classList.add('alert');
          setTimeout(() => box.classList.remove('alert'), 1500); 
          terminal.innerHTML += `<span class='red-glow'>Looks like something affected our system...\nDo virus scan\n</span><br>`;
          setTimeout(autoScroll, 20);   
  
          stage = 3;
        },9500);
    }
    
    else if (stage === 3 && cmd.toLowerCase() === "virus scan") {
      terminal.classList.remove("glitch");
      typeText("\nScanning for viruses...\nFound: 100% Love 💖\nFound: Infinite Happiness 🎉\nFound: Best Birthday Ever 🎂");
      setTimeout(() => {
        terminal.innerHTML += `<span class='red-glow'>The virus is spreading throughout the system.. So upgrade the system..</span><br>\n`;
        setTimeout(autoScroll, 20); 
  
        stage = 4;
      },5600);
    }

    else if (stage === 4 && cmd.toLowerCase() === "upgrade system") {
      typeText("\nApplying upgrade patch...\nPatch notes:\n- Happiness +100%✨\n- Love firewall reinforced 💖\n- Joy modules activated 🎉\n\n✅ Upgrade complete → Version: Best Birthday Ever");
      setTimeout(() => {
        terminal.innerHTML += `<span class='red-glow'>For better performance activate the firewall..</span><br>\n`;
        setTimeout(autoScroll, 20); 
  
        stage = 5;
      },8500);
    }

    else if (stage === 5 && cmd.toLowerCase() === "activate firewall") {
      typeText("\nFirewall activated...🔥\nBlocking negativity...🚫\nBlocking sadness...🙅‍♀️\nAllowing: joy, love, cake 🎉\nSystem secure.. ❤");
      typeText("We came to the end...\nNo worriesss..☝🏻☝🏻☝🏻\nThis is the end for the terminal alone.. NOT FOR USSS..🫂🫂🫂");
      typeText("wanna see the end credits..? (Y/N)");
      setTimeout(autoScroll, 20); 
  
      stage = 6;
    }

    else if (stage === 6 && cmd.toLowerCase() === "y") {
      typeText("\nStarring: Agent " + agentName + " 🎂\nDirected by: The Universe ✨\nProduced by: Sweet Factory 🎂\nWritten by: My Heart 💖\nSpecial Thanks: YOU 💕 \n\nPoitu vaanga TaaTaa..😉👋");
      setTimeout(autoScroll, 20); 
  
      stage = 8;
    }
  }
});


typeText("Agent name:");
