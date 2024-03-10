class BankCimb {
    static generateDataList() {
        return {
            "status": true,
            "message": "successfully retrieved data",
            "data": [
                {
                    "title": "Virtual Account",
                    "methods": [
                        {
                            "name": "ATM",
                            "steps": [
                                "Masukkan kartu ATM CIMB Niaga Anda",
                                "Pilih bahasa yang diinginkan",
                                "Masukkan PIN ATM Anda",
                                "Pilih menu Transaksi Lainnya",
                                "Pilih menu Pembayaran",
                                "Pilih menu Pembayaran Virtual Account",
                                "Masukkan kode bank CIMB Niaga (022)",
                                "Masukkan nomor Virtual Account",
                                "Cek detail transaksi",
                                "Masukkan nominal pembayaran",
                                "Pilih sumber dana",
                                "Konfirmasi pembayaran",
                                "Simpan bukti transaksi"
                            ]
                        },
                        {
                            "name": "Internet Banking",
                            "steps": [
                                "Buka situs web resmi CIMB Niaga",
                                "Login ke akun Internet Banking CIMB Niaga Anda",
                                "Pilih menu Transfer",
                                "Pilih menu Transfer ke Virtual Account",
                                "Pilih bank tujuan (CIMB Niaga)",
                                "Masukkan nomor Virtual Account",
                                "Cek detail transaksi",
                                "Masukkan nominal pembayaran",
                                "Pilih sumber dana",
                                "Masukkan PIN dan Token CIMB Niaga Anda",
                                "Konfirmasi pembayaran",
                                "Simpan bukti transaksi"
                            ]
                        },
                        {
                            "name": "Mobile Banking",
                            "steps": [
                                "Buka aplikasi OCTO Mobile CIMB Niaga",
                                "Login ke akun OCTO Mobile CIMB Niaga Anda",
                                "Pilih menu Transfer",
                                "Pilih menu Transfer ke Rekening CIMB Niaga",
                                "Masukkan nomor Virtual Account",
                                "Cek detail transaksi",
                                "Masukkan nominal pembayaran",
                                "Pilih sumber dana",
                                "Masukkan PIN OCTO Mobile Anda",
                                "Konfirmasi pembayaran",
                                "Simpan bukti transaksi"
                            ]
                        }
                    ]
                },
                {
                    "title": "Bank Transfer",
                    "methods": [
                        {
                            "name": "ATM",
                            "steps": [
                                "Masukkan kartu ATM CIMB Niaga Anda",
                                "Pilih bahasa yang diinginkan",
                                "Masukkan PIN ATM Anda",
                                "Pilih menu Transaksi",
                                "Pilih menu Transfer",
                                "Pilih menu Ke Rekening Bank Lain",
                                "Masukkan kode bank tujuan (misalnya: 002 untuk BCA)",
                                "Masukkan nomor rekening tujuan",
                                "Masukkan nominal transfer",
                                "Cek detail transaksi",
                                "Pilih sumber dana",
                                "Konfirmasi pembayaran",
                                "Simpan bukti transaksi"
                            ]
                        },
                        {
                            "name": "Internet Banking",
                            "steps": [
                                "Buka situs web resmi CIMB Niaga",
                                "Login ke akun Internet Banking CIMB Niaga Anda",
                                "Pilih menu Transfer",
                                "Pilih menu Transfer ke Rekening Bank Lain",
                                "Masukkan kode bank tujuan (misalnya: 002 untuk BCA)",
                                "Masukkan nomor rekening tujuan",
                                "Masukkan nominal transfer",
                                "Cek detail transaksi",
                                "Pilih sumber dana",
                                "Masukkan PIN dan Token CIMB Niaga Anda",
                                "Konfirmasi pembayaran",
                                "Simpan bukti transaksi"
                            ]
                        },
                        {
                            "name": "Mobile Banking",
                            "steps": [
                                "Buka aplikasi OCTO Mobile CIMB Niaga",
                                "Login ke akun OCTO Mobile CIMB Niaga Anda",
                                "Pilih menu Transfer",
                                "Pilih menu Transfer ke Rekening Lain",
                                "Masukkan kode bank tujuan (misalnya: 002 untuk BCA)",
                                "Masukkan nomor rekening tujuan",
                                "Masukkan nominal transfer",
                                "Cek detail transaksi",
                                "Pilih sumber dana",
                                "Masukkan PIN OCTO Mobile Anda",
                                "Konfirmasi pembayaran",
                                "Simpan bukti transaksi"
                            ]
                        }
                    ]
                }
            ]
        }
    }
}

module.exports = BankCimb;