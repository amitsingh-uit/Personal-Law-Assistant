 function getAdvice() {
    let text = document.getElementById("query").value.toLowerCase();
    let result = document.getElementById("result");

    if (text.trim() === "") {
        result.style.display = "block";
        result.innerHTML = "Please type your legal problem clearly.";
        return;
    }

    let reply = "Aapki samasya clear nahi hai. Kripya thoda detail me likhiye.";

    // ========= FUNDAMENTAL RIGHTS =========
    if (text.includes("fundamental") || text.includes("article 14") || text.includes("equality")) {
        reply = "Article 14 Constitution ke tahat sabhi nagrikon ko law ke samne equality deta hai. Sarkari ya private authority kisi ke saath bina valid reason discrimination nahi kar sakti. Agar aapko lagta hai ki aapke saath anyaay hua hai, to aap High Court ya Supreme Court me writ petition file kar sakte hain.\n\nIs tarah ke cases me written proof, orders aur documents important hote hain. Court illegal action ko cancel ya compensation order kar sakti hai. Iska matlab hai ki state ya koi bhi authority bina valid aur reasonable reason ke kisi ke saath discrimination nahi kar sakti. Equality ka principle arbitrariness ko rokta hai aur fairness ensure karta hai.\n\nAgar kisi individual ke saath caste, gender, religion ya kisi aur ground par unfair treatment hua hai, to ye Article 14 ka violation mana ja sakta hai. Aise cases me government orders, notices aur official communications bahut important evidence hote hain.\n\n Court illegal action ko cancel kar sakti hai aur zarurat padne par compensation ya corrective direction bhi de sakti hai.";
    }

    else if (text.includes("speech") || text.includes("expression") || text.includes("article 19")) {
        reply = "Article 19 ke tahat aapko freedom of speech, movement aur profession ka adhikar milta hai. Lekin ye freedom reasonable restrictions ke adheen hoti hai jaise public order aur morality.\n\nAgar aapki freedom bina legal reason restrict hui hai to ye unconstitutional ho sakta hai aur aap court ka sahara le sakte hain.";
    }

    // ========= EMPLOYMENT / LABOUR =========
    else if (text.includes("salary") || text.includes("termination") || text.includes("layoff") || text.includes("job")) {
        reply = "Labour Laws ke tahat bina notice salary rokna ya termination illegal ho sakta hai. Industrial Disputes Act employees ko protection deta hai. Aap Labour Commissioner ya Labour Court me complaint file kar sakte hain.\n\nAppointment letter, salary slips aur email records evidence ke roop me kaam aate hain.";
    }

    else if (text.includes("overtime") || text.includes("working hours") || text.includes("bonus")) {
        reply = "Factories Act aur Labour Laws ke tahat overtime aur working hours regulated hote hain. Agar employer bina payment overtime karwa raha hai to ye illegal hai.\n\nEmployee written complaint aur legal notice ke madhyam se apna haq maang sakta hai.";
    }

    // ========= CRIMINAL LAW =========
    else if (text.includes("fir") || text.includes("police") || text.includes("arrest")) {
        reply = "Criminal Procedure Code ke tahat police FIR register karne ke liye bound hoti hai. Illegal arrest ya detention constitutional violation hai.\n\nAgar police cooperate na kare to Magistrate ya High Court ka sahara liya ja sakta hai.Criminal Procedure Code (CrPC) ke tahat police ka duty hota hai ki cognizable offence me FIR register kare. Police FIR lene se mana nahi kar sakti.\n\nIllegal arrest ya bina reason detention fundamental rights ka violation hota hai. Arrest ke time accused ko grounds of arrest batana mandatory hota hai.\n\nAgar police cooperate nahi karti, to complainant Magistrate ke paas application ya High Court me writ petition file kar sakta hai.";
    }

    else if (text.includes("bail") || text.includes("anticipatory")) {
        reply = "Bail ek legal right hai aur jail exception mana jata hai. Anticipatory bail arrest se pehle High Court ya Sessions Court se li ja sakti hai.\n\nCourt offence ki gravity aur evidence ko dekhkar bail decide karti hai.";
    }

    // ========= WOMEN & FAMILY LAW =========
    else if (text.includes("divorce") || text.includes("maintenance") || text.includes("alimony")) {
        reply = "Divorce aur maintenance cases personal laws ke tahat decide hote hain. Maintenance spouse aur children dono ke liye ho sakti hai.\n\nCourt financial status aur dependency ko dekhkar maintenance fix karti hai.";
    }

    else if (text.includes("custody") || text.includes("guardianship")) {
        reply = "Child custody cases me court hamesha child ke welfare ko priority deta hai. Mata-pita dono ke rights consider kiye jate hain.\n\nSchool records aur financial capability important factors hote hain.";
    }

    else if (text.includes("dowry") || text.includes("498a") || text.includes("domestic")) {
        reply = "Dowry harassment aur domestic violence IPC aur Domestic Violence Act ke tahat punishable offence hai.\n\nProtection order, residence order aur maintenance ke liye court approach ki ja sakti hai.";
    }

    // ========= PROPERTY LAW =========
    else if (text.includes("property") || text.includes("land") || text.includes("encroachment")) {
        reply = "Property disputes me ownership documents jaise sale deed aur registry kaafi important hote hain. Encroachment ke cases me injunction relief mil sakti hai.\n\nCivil Court illegal possession rok sakti hai.";
    }

    else if (text.includes("will") || text.includes("inheritance") || text.includes("succession")) {
        reply = "Inheritance aur succession laws ke tahat property legal heirs me distribute hoti hai. Registered will ko zyada importance di jati hai.\n\nDisputes ke liye civil suit ya probate file hota hai.";
    }

    // ========= CONSUMER LAW =========
    else if (text.includes("consumer") || text.includes("refund") || text.includes("warranty")) {
        reply = "Consumer Protection Act ke tahat defective product ya poor service ke liye complaint file ki ja sakti hai.\n\nForum replacement, refund ya compensation order kar sakta hai.";
    }

    // ========= CYBER LAW =========
    else if (text.includes("cyber") || text.includes("online fraud") || text.includes("hacking")) {
        reply = "Cyber offences IT Act ke tahat punishable hote hain. Online fraud ke liye cybercrime.gov.in par complaint file hoti hai.\n\nDigital evidence jaise screenshots aur bank records zaruri hote hain.";
    }

    // ========= EDUCATION LAW =========
    else if (text.includes("school") || text.includes("college") || text.includes("education")) {
        reply = "Education related disputes me UGC, CBSE aur education boards ke rules apply hote hain. Illegal fees ya rustication challenge ki ja sakti hai.\n\nHigh Court academic matters me relief de sakti hai.";
    }

    // ========= RTI =========
    else if (text.includes("rti") || text.includes("information")) {
        reply = "RTI Act ke tahat citizen government se information maang sakta hai. Agar information deny ho to appeal file hoti hai.\n\nRTI transparency aur accountability ensure karta hai.";
    }

    // ========= CONTRACT LAW =========
    else if (text.includes("contract") || text.includes("agreement") || text.includes("breach")) {
        reply = "Contract breach hone par affected party damages ya specific performance claim kar sakti hai.\n\nWritten agreement aur communication evidence ka kaam karta hai.";
    }

    // ========= TRAFFIC LAW =========
    else if (text.includes("traffic") || text.includes("challan") || text.includes("accident")) {
        reply = "Motor Vehicles Act ke tahat traffic challan aur accidents regulate hote hain. Accident cases me insurance claim kiya ja sakta hai.\n\nSerious accidents criminal liability bhi create kar sakte hain.";
    }

    // ========= DEFAULT =========
    result.style.display = "block";
    result.innerHTML = reply + "<br><br><b>Disclaimer:</b> Yeh sirf general legal information hai, professional legal advice nahi.";
}
   

/* async function getAdvice() {
    const query = document.getElementById("query").value;
    const resultDiv = document.getElementById("result");

    if (query.trim() === "") {
        alert("Please enter your legal problem");
        return;
    }

    resultDiv.style.display = "block";
    resultDiv.innerHTML = "⏳ Processing your query...";

    try {
        const response = await fetch("http://localhost:3000/legal-advice", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ question: query })
        });

        const data = await response.json();
        resultDiv.innerHTML = "⚖ <b>AI Response:</b><br>" + data.answer;

    } catch (error) {
        resultDiv.innerHTML = "❌ Error fetching legal advice";
    }
}           */
