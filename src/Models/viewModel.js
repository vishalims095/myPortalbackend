var{mongoose, conn} = require("../Modules/connection");
var mongoosePaginate = require('mongoose-paginate');
let  viewSchema  = mongoose.Schema(
    { 
        count : {
            type : Number,
            require : true,
            default : 1
        }
    },
    {
        strict: true,
        collection: 'view',
        versionKey: false
    }
);
// userSchema.index({location: '2dsphere'})
exports.viewModel = conn.model('view', viewSchema); 
