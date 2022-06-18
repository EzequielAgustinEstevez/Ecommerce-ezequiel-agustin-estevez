import {
	addDoc,
	collection,
	doc,
	getDoc,
	getDocs,
	getFirestore,
	query,
	where,
} from 'firebase/firestore';

/* Productos + Cateorias */
export const productosDB = async (categoryId = null) => {
	const db = getFirestore();
	let finalSearch;
	if (categoryId) {
		finalSearch = query(
			collection(db, 'productos'),
			where('category', '==', categoryId)
		);
	} else {
		finalSearch = collection(db, 'productos');
	}
	try {
		const snapshot = await getDocs(finalSearch);
		return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
	} catch (err) {
		console.log(err);
	}
};

/* Productos Detalles */
export const productosDBDetail = async (itemId) => {
	const db = getFirestore();
	const productRef = doc(db, 'productos', itemId);
	try {
		const snapshot = await getDoc(productRef);
		if (snapshot.exists()) {
			return { id: snapshot.id, ...snapshot.data() };
		} else {
			return null;
		}
	} catch (err) {
		console.log(err);
	}
};

/* Orden */
export const ordenDeCompra = async (orden) => {
	const db = getFirestore();
	const ordersCollection = collection(db, 'orders');
	try {
		const snapshot = await addDoc(ordersCollection, orden);
		return snapshot.id;
	} catch (err) {
		console.log(err);
	}
};
