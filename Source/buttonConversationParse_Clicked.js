function buttonConversationParse_Clicked()
{
	var d = document;
	var textareaConversationDefnAsJSON = 
		d.getElementById("textareaConversationDefnAsJSON");
	var conversationDefnAsJSON = textareaConversationDefnAsJSON.value;

	var conversationDefn = 
		ConversationDefn.deserialize(conversationDefnAsJSON);

	var conversationRun = new ConversationRun
	(
		conversationDefn
	);

	conversationRun.update();
}
