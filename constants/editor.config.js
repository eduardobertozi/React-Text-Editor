export const editorConfig = {
	readonly: false,
	toolbar: true,
	spellcheck: true,
	language: 'pt-br',
	placeholder: 'Escreva algo aqui...',
	// toolbarAdaptive: false,
	showCharsCounter: true,
	showWordsCounter: true,
	showXPathInStatusbar: false,
	askBeforePasteHTML: true,
	askBeforePasteFromWord: true,
	//defaultActionOnPaste: "insert_clear_html",
	// buttons: buttons,
	buttons: [
		'bold',
		'underline',
		'italic',
		'strikethrough', '|',
		'outdent', 'indent',  '|',
		'ul',
		'ol', '|',
		'fontsize',
		'brush',
		'paragraph', '|',
		'image',
		'video',
		'table',
		'link', '|',
		'align', 'undo', 'redo', '|',
		'hr',
		'eraser',
		'copyformat',
],
};