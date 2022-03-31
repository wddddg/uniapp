'use strict';
const db = uniCloud.database();
exports.main = async (event) => {
	const collection = db.collection('user')
	let res = collection.where({
		useropenid: event.useropenid
	}).get()

	if (res.result == 0) {
		let ress = collection.add({
			username: event.username,
			userimg: event.userimg,
			useropenid: event.useropenid,
			userphone: event.userphone
		})
	} else {
		return '已注册'
	}




	// let num = 1
	// if(){
	// 	console.log(111);
	// }else{
	// 	collection.add({
	// 		username:event.username,
	// 		userimg:event.userimg,
	// 		useropenid:event.useropenid,
	// 		userphone:event.userphone
	// 	})
	// 	// let resss = collection.update({
	// 	// 	userphone:event.userphone
	// 	// })
	// }





	// let res = collection.
	return ress
};
