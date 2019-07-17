class getData {
    constructor() {
        this.FullName = $('#FullName').val()
        this.age = parseInt($('#Age').val())
        this.height = parseInt( $('#Height').val())
        this.weight =  parseInt($('#Weight').val())
        this.sex = $(`input[name='GenSelect']:checked`).val()
        this.activity = parseInt($('#myRange').val())
    }
    
}


