class BankBri {
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
                                "Masukan kartu ATM BRI Anda",
                                "Pilih bahasa yang diinginkan",
                                "Masukkan PIN ATM Anda",
                                "Pilih menu Transaksi Lainnya",
                                "Pilih menu Pembayaran",
                                "Pilih menu BRIVA",
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
                                "Buka situs web resmi BRI",
                                "Login ke akun Internet Banking BRI Anda",
                                "Pilih menu Pembayaran",
                                "Pilih menu BRIVA",
                                "Masukkan nomor Virtual Account",
                                "Cek detail transaksi",
                                "Masukkan nominal pembayaran",
                                "Pilih sumber dana",
                                "Masukkan PIN dan Token BRI Anda",
                                "Konfirmasi pembayaran",
                                "Simpan bukti transaksi"
                            ]
                        },
                        {
                            "name": "Mobile Banking",
                            "steps": [
                                "Buka aplikasi BRImo",
                                "Login ke akun BRImo Anda",
                                "Pilih menu Pembayaran",
                                "Pilih menu BRIVA",
                                "Masukkan nomor Virtual Account",
                                "Cek detail transaksi",
                                "Masukkan nominal pembayaran",
                                "Pilih sumber dana",
                                "Masukkan PIN BRImo Anda",
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
                                "Masukan kartu ATM BRI Anda",
                                "Pilih bahasa yang diinginkan",
                                "Masukkan PIN ATM Anda",
                                "Pilih menu Transaksi",
                                "Pilih menu Transfer",
                                "Pilih menu Ke Rekening BRI",
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
                                "Buka situs web resmi BRI",
                                "Login ke akun Internet Banking BRI Anda",
                                "Pilih menu Pembayaran",
                                "Pilih menu Transfer ke Rekening BRI",
                                "Masukkan nomor rekening tujuan",
                                "Masukkan nominal transfer",
                                "Cek detail transaksi",
                                "Pilih sumber dana",
                                "Masukkan PIN dan Token BRI Anda",
                                "Konfirmasi pembayaran",
                                "Simpan bukti transaksi"
                            ]
                        },
                        {
                            "name": "Mobile Banking",
                            "steps": [
                                "Buka aplikasi BRImo",
                                "Login ke akun BRImo Anda",
                                "Pilih menu Transfer",
                                "Pilih menu Transfer ke Rekening BRI",
                                "Masukkan nomor rekening tujuan",
                                "Masukkan nominal transfer",
                                "Cek detail transaksi",
                                "Pilih sumber dana",
                                "Masukkan PIN BRImo Anda",
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

module.exports = BankBri;