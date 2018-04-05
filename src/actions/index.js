import * as Actions from '../constants/Actions'

export const AcGetProductList = (item) => {
	return {
		type: Actions.PRODUCT_LIST,
		item
	}
}

export const AcBuyProduct = (item, qty) => {
	return {
		type: Actions.BUY_PRODUCT,
		item,
		qty
	}
}

export const AcUpdateProduct = (item, qty) => {
	return {
		type: Actions.UPDATE_PRODUCT,
		item,
		qty
	}
}

export const AcRemoveProduct = (item) => {
	return {
		type: Actions.REMOVE_PRODUCT,
		item
	}
}

export const AcChangeNotify = (content) => {
	return {
		type: Actions.CHANGE_NOTIFY,
		content
	}
}