class BankBni {
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
                                "Masukan kartu ATM BNI Anda",
                                "Pilih bahasa yang diinginkan",
                                "Masukkan PIN ATM Anda",
                                "Pilih menu Transaksi Lainnya",
                                "Pilih menu Pembayaran",
                                "Pilih menu Virtual Account",
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
                                "Buka situs web resmi BNI",
                                "Login ke akun Internet Banking BNI Anda",
                                "Pilih menu Transfer",
                                "Pilih menu Transfer ke BNI Virtual Account",
                                "Masukkan nomor Virtual Account",
                                "Cek detail transaksi",
                                "Masukkan nominal pembayaran",
                                "Pilih sumber dana",
                                "Masukkan PIN dan Token BNI Anda",
                                "Konfirmasi pembayaran",
                                "Simpan bukti transaksi"
                            ]
                        },
                        {
                            "name": "Mobile Banking",
                            "steps": [
                                "Buka aplikasi BNI Mobile Banking",
                                "Login ke akun BNI Mobile Banking Anda",
                                "Pilih menu Transfer",
                                "Pilih menu BNI Virtual Account",
                                "Masukkan nomor Virtual Account",
                                "Cek detail transaksi",
                                "Masukkan nominal pembayaran",
                                "Pilih sumber dana",
                                "Masukkan PIN m-BNI Anda",
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
                                "Masukan kartu ATM BCA Anda",
                                "Pilih bahasa yang diinginkan",
                                "Masukkan PIN ATM Anda",
                                "Pilih menu Transaksi",
                                "Pilih menu Transfer",
                                "Pilih menu Ke Rekening Bank Lain",
                                "Pilih bank tujuan transfer",
                                "Masukkan kode bank tujuan",
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
                                "Buka situs web resmi BCA",
                                "Login ke akun Internet Banking BCA Anda",
                                "Pilih menu Transfer",
                                "Pilih menu Transfer ke Rekening Bank Lain",
                                "Pilih bank tujuan transfer",
                                "Masukkan kode bank tujuan",
                                "Masukkan nomor rekening tujuan",
                                "Masukkan nominal transfer",
                                "Cek detail transaksi",
                                "Pilih sumber dana",
                                "Masukkan PIN dan Token BCA Anda",
                                "Konfirmasi pembayaran",
                                "Simpan bukti transaksi"
                            ]
                        },
                        {
                            "name": "Mobile Banking",
                            "steps": [
                                "Buka aplikasi BNI Mobile Banking",
                                "Login ke akun BNI Mobile Banking Anda",
                                "Pilih menu Transfer",
                                "Pilih menu Transfer ke Rekening BNI",
                                "Masukkan nomor rekening tujuan",
                                "Masukkan nominal transfer",
                                "Cek detail transaksi",
                                "Pilih sumber dana",
                                "Masukkan PIN m-BNI Anda",
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

module.exports = BankBni;