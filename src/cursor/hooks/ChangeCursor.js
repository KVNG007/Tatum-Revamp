import  {useEffect, useContext} from "react"

import { MouseContext }  from "../context/mouse-context";

export default function ChangeCursor() {
	const { cursorChangeHandler } = useContext(MouseContext);

	useEffect(() => {
		const paragraphs = Array.from(document.getElementsByClassName("paragraph"));

		let headings = Array.from(document.getElementsByClassName("heading"));
		headings = [
			...headings,
			...Array.from(document.getElementsByTagName("h3")),
			...Array.from(document.getElementsByTagName("h5")),
			...Array.from(document.getElementsByTagName("h2")),
		];

		const buttons = Array.from(document.getElementsByTagName("button"));

		let links = Array.from(document.getElementsByClassName("link"));
		links = links.concat(Array.from(document.getElementsByTagName("A")));

		const inputs = Array.from(document.getElementsByTagName("INPUT"));
		let btns = Array.from(document.getElementsByClassName("btn"));

		const texts = Array.from(document.getElementsByClassName("cursor__text"));

		btns = btns.concat(
			Array.from(document.getElementsByClassName("swiper-button-next")),
			Array.from(document.getElementsByClassName("swiper-button-prev"))
		);

		const icons = Array.from(document.getElementsByClassName("icon"));

		paragraphs.forEach((paragraph) => {
			paragraph.addEventListener("mouseover", () =>
				cursorChangeHandler("text")
			);
			paragraph.addEventListener("mouseout", () => cursorChangeHandler(" "));
		});
		texts.forEach((text) => {
			text.addEventListener("mouseover", () => cursorChangeHandler("text"));
			text.addEventListener("mouseout", () => cursorChangeHandler(" "));
		});

		btns.forEach((btn) => {
			btn.addEventListener("mouseover", () => {
				cursorChangeHandler("button");
				console.log("hovered a button");
			});
			btn.addEventListener("mouseout", () => cursorChangeHandler(" "));
		});
		// btns.forEach((btn) => {
		// 	btn.addEventListener("mouseover", () => cursorChangeHandler("button"));
		// 	btn.addEventListener("mouseout", () => cursorChangeHandler(" "));
		// });

		buttons.forEach((button) => {
			button.addEventListener("mouseover", () => cursorChangeHandler("button"));
			button.addEventListener("mouseout", () => cursorChangeHandler(" "));
		});

		links.forEach((link) => {
			link.addEventListener("mouseover", () => cursorChangeHandler("button"));
			link.addEventListener("mouseout", () => cursorChangeHandler(" "));
		});

		icons.forEach((icon) => {
			icon.addEventListener("mouseover", () => cursorChangeHandler("button"));
			icon.addEventListener("mouseout", () => cursorChangeHandler(" "));
		});

		inputs.forEach((input) => {
			input.addEventListener("mouseover", () => cursorChangeHandler("text"));
			input.addEventListener("mouseout", () => cursorChangeHandler(""));
		});
		headings.forEach((heading) => {
			heading.addEventListener("mouseover", () => cursorChangeHandler("text"));
			heading.addEventListener("mouseout", () => cursorChangeHandler(""));
		});
	});
}

//fixed the bug with the first cursor on the about page
export function ChangeCursor2() {
	
	useEffect(() => {
		const btns = Array.from(document.getElementsByClassName("btn"));

		const paragraphs = Array.from(document.getElementsByTagName("strong"));

		const headings = Array.from(document.getElementsByClassName("heading"));

		const modals = Array.from(document.getElementsByClassName("containerr"));
		const lists = Array.from(document.getElementsByClassName(`item`));

		const links = Array.from(document.getElementsByTagName(`A`));

		const icons = Array.from(document.getElementsByClassName(`icon`));

		const cursor = document.getElementsByClassName(`dot`)[0];
		const ring = document.getElementsByClassName(`ring`)[0];

		paragraphs.forEach((paragraph) => {
			paragraph.addEventListener("mouseover", () => {
				cursor.classList.add(`text`);
				ring.classList.add(`text`);
			});

			paragraph.addEventListener("mouseout", () => {
				cursor.classList.remove(`text`);
				ring.classList.remove(`text`);
			});
		});

		headings.forEach((heading) => {
			heading.addEventListener("mouseover", () => {
				cursor.classList.add(`text`);
				ring.classList.add(`text`);
			});

			heading.addEventListener("mouseout", () => {
				cursor.classList.remove(`text`);
				ring.classList.remove(`text`);
			});
		});

		lists.forEach((list) => {
			list.addEventListener("mouseover", () => {
				cursor.classList.add(`text`);
				ring.classList.add(`text`);
			});

			list.addEventListener("mouseout", () => {
				cursor.classList.remove(`text`);
				ring.classList.remove(`text`);
			});
		});

		modals.forEach((modal) => {
			modal.addEventListener("mouseover", () => {
				cursor.classList.add(`button`);
				ring.classList.add(`button`);
			});

			modal.addEventListener("mouseout", () => {
				cursor.classList.remove(`button`);
				ring.classList.remove(`button`);
			});
		});

		btns.forEach((btn) => {
			btn.addEventListener("mouseover", () => {
				cursor.classList.add(`button`);
				ring.classList.add(`button`);
			});

			btn.addEventListener("mouseout", () => {
				cursor.classList.remove(`button`);
				ring.classList.remove(`button`);
			});
		});

		icons.forEach((icon) => {
			icon.addEventListener("mouseover", () => {
				cursor.classList.add(`button`);
				ring.classList.add(`button`);
			});

			icon.addEventListener("mouseout", () => {
				cursor.classList.remove(`button`);
				ring.classList.remove(`button`);
			});
		});

		links.forEach((link) => {
			link.addEventListener("mouseover", () => {
				cursor.classList.add(`button`);
				ring.classList.add(`button`);
			});
			link.addEventListener("mouseout", () => {
				cursor.classList.remove(`button`);
				ring.classList.remove(`button`);
			});
			link.addEventListener("click", () => {
				cursor.classList.remove(`button`);
				ring.classList.remove(`button`);
			});
		});
	});
}

