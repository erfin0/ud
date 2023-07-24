import { defineStore } from "pinia";
import axios from "axios";

export const usePengantinStore = defineStore("pegantin", {
    state: () => ({
        pria: null,
        wanita: null,
        tgl: null,
        tamu: null
    }),
    actions: {
        setPengantin(payload) {
            if (payload.pria) {
                this.pria = payload.pria;
            }
            if (payload.wanita) {
                this.wanita = payload.wanita;
            }
            if (payload.tgl) {
                this.tgl = payload.tgl;
            }
            if (payload.tamu) {
                this.tamu = payload.tamu;
            }
        },
       

        fetch() {
           const url=`data-sources/pegantin.json`
            axios
                .get(url)
                .then((r) => {
                    if (r.data && r.data.data) {
                        // this[sampleDataKey] = r.data.data;
                        this.setPengantin(r.data.data)  ;

                    }
                })
                .catch((error) => {
                    alert(error.message);
                });
        },
    },
});