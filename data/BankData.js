class BankData {
    static generateDataList() {
        return {
            "status": true,
            "message": "successfully retrieved data",
            "data": [
                {
                    "code": "BCA",
                    "bankName": "Bank BCA"
                },
                {
                    "code": "BNI",
                    "bankName": "Bank BNI"
                },
                {
                    "code": "BRI",
                    "bankName": "Bank BRI"
                },
                {
                    "code": "MANDIRI",
                    "bankName": "Bank Mandiri"
                },
                {
                    "code": "CIMB",
                    "bankName": "Bank CIMB"
                }
            ]
        }
    }
}

module.exports = BankData