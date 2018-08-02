import {JetView} from "webix-jet";
import FlightForm from "views/flightform";
import {info} from "models/info";

export default class FlightInfo extends JetView {
	config(){
		return {
			rows:[
				FlightForm,
				{
					view:"datatable",
					select:true,
					columns:[
						{ id:"from", header:"From", fillspace:1, sort:"string" },
						{ id:"to", header:"To", fillspace:1, sort:"string" },
						{ id:"depart", header:"Depart", fillspace:1, sort:"int" },
						{ id:"arrive", header:"Arrive", fillspace:1, sort:"int" },
						{ id:"status", header:"Status", fillspace:1, sort:"string" }
					]
				}
			]
		};
	}
	init(view){
		view.queryView({view:"datatable"}).parse(info);
	}
}
