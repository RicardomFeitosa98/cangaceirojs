export	class ApplicationException	extends	Error	{
	/*	código	omitido	*/
		}
class	ApplicationException	extends	Error	{
	constructor(msg	=	'')	{
	super(msg);
this.name	=	this.constructor.name;
	}
}