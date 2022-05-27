// import { doc, getDoc, getFirestore } from 'firebase/firestore';
// import { useEffect, useState } from 'react';

// function FirebaseDoc() {
// 	const [paguinas, setpaguinas] = useState([]);
// 	const db = getFirestore();
// 	//pages
// 	//doc id: 5IvjlOOTkwyZpjvFtkXG
// 	//doc data(): pag:
// 	useEffect(() => {
// 		const myDocumento = doc(db, 'pages', '5IvjlOOTkwyZpjvFtkXG');
// 		getDoc(myDocumento).then((pages) => {
// 			setpaguinas(pages.data().pages);
// 		});
// 	}, []);
// 	return paguinas;
// }
// export default FirebaseDoc;
