import { Schema , model , models , Document} from "mongoose";

export interface IEvent extends Document {
    _id :string;
    title : string;
    description?:string;
    location?:string;
    createdAt :Date;
    imageUrl :string;
    startDataTime : Date;
    endDateTime : Date;
    price?: string;
    isFree : boolean;
    url?: string;
    category : {_id :string , name : string}
    organizer : {_id : string , firstName : string , LastName : string}
}

const EventSchema = new Schema({
    title : {type: String , required : true},
    description : { type : String },
    location : {type :String},
    createdAt : {type : Date , default : Date.now },
    imageUrl : {type: String , required : true},
    startDataTime : {type: Date , default : Date.now},
    endDataTime : {type: Date , required : Date.now},
    price : {type: String },
    isFree : {type: Boolean , default: false},
    url : {type: String },
    category : {type: Schema.Types.ObjectId , ref:'category'},
    organizer : {type: Schema.Types.ObjectId , ref : 'User'},
})

const Event = models.Event || model('Event', EventSchema);

export default Event;