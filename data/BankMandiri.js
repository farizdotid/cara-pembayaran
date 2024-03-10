class BankMandiri {
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
                                "Masukan kartu ATM Mandiri Anda",
                                "Pilih bahasa yang diinginkan",
                                "Masukkan PIN ATM Anda",
                                "Pilih menu Transaksi",
                                "Pilih menu Pembayaran",
                                "Pilih menu Multi Payment",
                                "Pilih menu Mandiri Bill Payment",
                                "Masukkan kode perusahaan (misalnya: 88888 untuk PLN)",
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
                                "Buka situs web resmi Mandiri",
                                "Login ke akun Internet Banking Mandiri Anda",
                                "Pilih menu Bayar/Beli",
                                "Pilih menu Pembayaran",
                                "Pilih menu Multi Payment",
                                "Pilih menu Mandiri Bill Payment",
                                "Masukkan kode perusahaan (misalnya: 88888 untuk PLN)",
                                "Masukkan nomor Virtual Account",
                                "Cek detail transaksi",
                                "Masukkan nominal pembayaran",
                                "Pilih sumber dana",
                                "Masukkan PIN dan Token Mandiri Anda",
                                "Konfirmasi pembayaran",
                                "Simpan bukti transaksi"
                            ]
                        },
                        {
                            "name": "Mobile Banking",
                            "steps": [
                                "Buka aplikasi Livin' by Mandiri",
                                "Login ke akun Livin' by Mandiri Anda",
                                "Pilih menu Bayar",
                                "Pilih menu Multi Payment",
                                "Pilih menu Mandiri Bill Payment",
                                "Masukkan kode perusahaan (misalnya: 88888 untuk PLN)",
                                "Masukkan nomor Virtual Account",
                                "Cek detail transaksi",
                                "Masukkan nominal pembayaran",
                                "Pilih sumber dana",
                                "Masukkan PIN Livin' by Mandiri Anda",
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
                                "Masukkan kartu ATM Mandiri Anda",
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
                                "Buka situs web resmi Mandiri",
                                "Login ke akun Internet Banking Mandiri Anda",
                                "Pilih menu Transfer",
                                "Pilih menu Transfer ke Rekening Bank Lain",
                                "Masukkan kode bank tujuan (misalnya: 002 untuk BCA)",
                                "Masukkan nomor rekening tujuan",
                                "Masukkan nominal transfer",
                                "Cek detail transaksi",
                                "Pilih sumber dana",
                                "Masukkan PIN dan Token Mandiri Anda",
                                "Konfirmasi pembayaran",
                                "Simpan bukti transaksi"
                            ]
                        },
                        {
                            "name": "Mobile Banking",
                            "steps": [
                                "Buka aplikasi Livin' by Mandiri",
                                "Login ke akun Livin' by Mandiri Anda",
                                "Pilih menu Transfer",
                                "Pilih menu Transfer ke Bank Lain",
                                "Masukkan kode bank tujuan (misalnya: 002 untuk BCA)",
                                "Masukkan nomor rekening tujuan",
                                "Masukkan nominal transfer",
                                "Cek detail transaksi",
                                "Pilih sumber dana",
                                "Masukkan PIN Livin' by Mandiri Anda",
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

module.exports = BankMandiri;