export const INPUT_TEXT = 'INPUT_TEXT';
export const IS_REMOVE = 'IS_REMOVE';


export function handleText(text){
	return {
		type: INPUT_TEXT, 
		payload: text
	}
}

export function handleClick(bol){
	return {
		type: IS_REMOVE,
		payload: bol
	}
}