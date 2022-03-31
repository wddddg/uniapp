'use strict';
const db = uniCloud.database();
exports.main = async (event) => {
	const collection = db.collection('houseinfo')
	let res = await collection.doc(event.aaaa).update({
		attention : true
	})
	return event
};
