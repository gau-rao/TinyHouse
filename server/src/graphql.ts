import { GraphQLID, GraphQLInt , GraphQLObjectType , GraphQLString , GraphQLSchema, GraphQLNonNull ,GraphQLList} from "graphql";
import { listings } from "./listings";
const Listing = new GraphQLObjectType ({
    name : "Listing",
    fields: {
        id: { type: GraphQLID},
        title: { type : GraphQLString },
        image : {type : GraphQLString },
        address : { type : GraphQLString },
        price : { type : GraphQLInt},
        numOfGuests : { type : GraphQLInt },
        numOfBeds : {type : GraphQLInt},
        numOfBaths : {type : GraphQLInt},
        rating : { type : GraphQLInt }
    }
}); 
const query = new GraphQLObjectType({
    name : "Query",
    fields :{
        listings : {
            type : GraphQLNonNull(GraphQLList(GraphQLNonNull(Listing))),
            resolve : () =>{
                return listings;
            } 
        }
    }
})  ;

const mutation = new GraphQLObjectType({
    name : "Mutation",
    fields:{
        deleteListing :{
            type : GraphQLNonNull(Listing),
            args: {
                id : {type : GraphQLNonNull(GraphQLID)}
            },
            resolve : (_root,{id }) => {
                for(let i =0 ;i<listings.length; i++){
                    if (listings[i].id ===id){
                        return listings.splice(i,1)[0];
                    }
                }
                throw new Error ("failed to delete listing");
            }
        } 
    } 
});  

export const schema = new GraphQLSchema ({query, mutation}); 