# This React Project has CRUD Operation 

## How this project functioning CRUD Opreration.
    
### For Cread
    * step 1: get data from all input form
    * step 2: then post data via axios/fetch
    * step 3: then backend will set data into database and send confirmation status
    * step: when client get confirmation data will be set into that state variable.

### For Read
    * step 1: get data via axios/fetch from Database then set into a state varaible.
    * step 2: then genarate  UI, based on that state variable.
    
### For Delete
    * step 1: get data-Id of whice element will be deleted
    * step 2: then pass data-Id via axios/fetch
    * step 3: then backend will delete this data from Database and send confirmation status
    * step 4: when client get confirmation data will be delete, in that state variable.
    
### For Update
    * step 1: get data-Id of whice element will be updated
    * step 2: then open update form based on that id
    * step 3: then fill up this form for update
    * step 4: then get data from this form
    * step 5: then pass data-Id and updated data via axios/fetch
    * step 6: then backend will update this data from Database and send confirmation status
    * step 7: when client get confirmation data will be update, in that state variable.