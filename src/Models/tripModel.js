var{mongoose, conn} = require("../Modules/connection");
var mongoosePaginate = require('mongoose-paginate');
let  tripSchema  = mongoose.Schema(
    { 
        trip_name : {
            type : String,
            require : true,
            default : "N/A"  
        },
        image : []
    },
    {
        strict: true,
        collection: 'Trip',
        versionKey: false
    }
);
// userSchema.index({location: '2dsphere'})
exports.tripModel = conn.model('Trip', tripSchema); 
