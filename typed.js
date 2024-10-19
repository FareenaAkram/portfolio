document.addEventListener("DOMContentLoaded", function() {
		
		const typedTextSpan = document.querySelector(".typed-text");
		const cursorSpan = document.querySelector(".cursor");
		
		if (!typedTextSpan || !cursorSpan) {
			console.error("Elements not found:", {
				typedTextSpan: typedTextSpan,
				cursorSpan: cursorSpan
			});
			return;
		}

		const textArray = ["Web Developer"];
		const typingDelay = 200;
		const erasingDelay = 100;
		const newTextDelay = 2000; // Delay between current and next text
		let textArrayIndex = 0;
		let charIndex = 0;

		function type() {
			if (charIndex < textArray[textArrayIndex].length) {
				if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
				typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
				charIndex++;
				setTimeout(type, typingDelay);
			} else {
				cursorSpan.classList.remove("typing");
				setTimeout(erase, newTextDelay);
			}
		}

		function erase() {
			if (charIndex > 0) {
				if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
				typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
				charIndex--;
				setTimeout(erase, erasingDelay);
			} else {
				cursorSpan.classList.remove("typing");
				textArrayIndex++;
				if (textArrayIndex >= textArray.length) textArrayIndex = 0;
				setTimeout(type, typingDelay + 1100);
			}
		}

		if (textArray.length) setTimeout(type, newTextDelay + 250);
	});



// Handle form submission
// function handleSubmit(event) {
//     event.preventDefault();

//     const form = event.target;

//     // Use Fetch to send form data to Netlify
//     fetch("/", {
//         method: "POST",
//         headers: { "Content-Type": "application/x-www-form-urlencoded" },
//         body: new URLSearchParams(new FormData(form)).toString()
//     })
//     .then(() => {
//         // Show the success message popup
//         document.getElementById('success-message').classList.remove('hidden');
//     })
//     .catch((error) => alert('Form submission error: ' + error));
// }

// // Close the success message popup
// function closePopup() {
//     document.getElementById('success-message').classList.add('hidden');
// }


function handleSubmit(event) {
  event.preventDefault();
  const form = document.getElementById('contact-form');

  // Simulating form submission
  form.submit(); 

  // Display success popup
  document.getElementById('success-popup').classList.remove('hidden');
}

function closePopup() {
  document.getElementById('success-popup').classList.add('hidden');
}


