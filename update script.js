function downloadResume() {
  alert("Use Ctrl + P and Save as PDF to download your resume");
  window.print();
}

// ================= OPEN CLOSE =================

const chatToggle =
document.getElementById("chatToggle");

const chatbot =
document.getElementById("chatbot");

const closeBtn =
document.getElementById("closeBtn");

chatToggle.onclick = () => {

    chatbot.style.display = "flex";
};

closeBtn.onclick = () => {

    chatbot.style.display = "none";
};

// ================= SEND MESSAGE =================

function sendMessage(){

    const input =
    document.getElementById("userInput");

    const chatBody =
    document.getElementById("chatBody");

    const message =
    input.value.trim();

    if(message === "") return;

    // USER MESSAGE

    const userDiv =
    document.createElement("div");

    userDiv.classList.add("user-message");

    userDiv.innerHTML = message;

    chatBody.appendChild(userDiv);

    // BOT REPLY

    const botDiv =
    document.createElement("div");

    botDiv.classList.add("bot-message");

    let reply = "";

    const msg = message.toLowerCase();

    // ABOUT

    if(msg.includes("about")){

        reply =
        `Pratiksha Bobade is a passionate Web Developer skilled in HTML, CSS, JavaScript, C++, and Python. She is currently pursuing B.Tech in Information Technology.`;

    }

    // SKILLS

    else if(msg.includes("skills")){

        reply =
        `💻 Skills:<br><br>

        ✅ HTML<br>
        ✅ CSS<br>
        ✅ JavaScript<br>
        ✅ Python<br>
        ✅ C++`;
    }

    // PROJECTS

    else if(msg.includes("project")){

        reply =
        `🚀 Projects:<br><br>

        🔹 Course Enrollment System<br>
        🔹 EduQuest Smart E-Learning Platform<br>
        🔹 Student Result Analyzer`;
    }

    // EDUCATION

    else if(msg.includes("education")){

        reply =
        `🎓 Education:<br><br>

        B.Tech in Information Technology<br>
        2024 - 2028`;
    }

    // CONTACT

    else if(msg.includes("contact")){

        reply =
        `📧 Email: pratikshabobde05@jdcoem.ac.in<br><br>

        📍 Nagpur, Maharashtra`;
    }

    // HELLO

    else if(
        msg.includes("hi") ||
        msg.includes("hello")
    ){

        reply =
        `Hello 👋<br><br>

        How can I help you today?`;
    }

    // DEFAULT

    else{

        reply =
        `😅 Sorry, I don't understand that yet.`;
    }

    // SHOW BOT MESSAGE

    setTimeout(() => {

        botDiv.innerHTML = reply;

        chatBody.appendChild(botDiv);

        chatBody.scrollTop =
        chatBody.scrollHeight;

    }, 500);

    input.value = "";
}
