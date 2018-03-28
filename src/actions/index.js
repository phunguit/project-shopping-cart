import * as Actions from '../constants/Actions'

export const AcGetProductList = (item) => {
	return {
		type: Actions.PRODUCT_LIST,
		item
	}
}

export const AcBuyProduct = (item) => {
	return {
		type: Actions.BUY_PRODUCT,
		item
	}
}

export const AcUpdateProduct = (id) => {
	return {
		type: Actions.UPDATE_PRODUCT,
		id
	}
}

export const AcRemoveProduct = (item) => {
	return {
		type: Actions.REMOVE_PRODUCT,
		item
	}
}

export const AcChangeNotify = (string) => {
	return {
		type: Actions.CHANGE_NOTYFY,
		string
	}
}