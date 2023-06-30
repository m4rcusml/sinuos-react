import React from 'react'
import './styles/Graficos.css'
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { Chart } from "react-google-charts"
import { useEffect, useState } from "react"
import * as firebase from "firebase/app"
//import { getAnalytics } from "firebase/analytics"
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, getDocs, collection, query, where } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBdWUy8RN4dnHcn95hSJboPUoBJ5d5mw6c",
  authDomain: "sinuostester.firebaseapp.com",
  projectId: "sinuostester",
  storageBucket: "sinuostester.appspot.com",
  messagingSenderId: "731021885458",
  appId: "1:731021885458:web:ba9b2a29864aa2b27f58cb",
  measurementId: "G-JWFTY73WGS"
}
const Graficos = () => {

  let [valorPosto1, setValorPosto1] = useState(0)
  let [valorPosto2, setValorPosto2] = useState(0)
  let [valorPosto3, setValorPosto3] = useState(0)
  let [valorPosto4, setValorPosto4] = useState(0)

  let [ValorPosto1Ph, setValorPosto1Ph] = useState(0)
  let [ValorPosto2Ph, setValorPosto2Ph] = useState(0)
  let [ValorPosto3Ph, setValorPosto3Ph] = useState(0)
  let [ValorPosto4Ph, setValorPosto4Ph] = useState(0)

  useEffect(() => {
    callSetterTem(7, "Temperatura");
    callSetterPh(7, "Ph");

  }, [])

  async function SetTimedValues1stTem(dateParam, nameData) {

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const collectionReference = collection(db, "2023-06-26")
    const QuerySnapshot = await getDocs(collectionReference)
    if (dateParam >= 7) {
      if (QuerySnapshot.empty) {
        //console.log("Teste unpassed");
      } else {
        //console.log("Teste passed")
        let auxiliarLoop = 0
        let auxiliarTesterLoop = 26
        let auxiliarAverageForLoop = 0
        let auxiliarLoopDecrementer = 0
        const data = new Date();
        // Pegar o ano atual usando o método getFullYear
        var day = data.getDate();
        const year = data.getFullYear();
        var mes = data.getMonth() + 1;
        // Mostrar o ano atual no console
        var month = mes.toString().padStart(2, "0");


        for (let i = 0; i <= dateParam; i++) {

          if ((day - i) < 1) {
            mes--;
            month = mes.toString().padStart(2, "0")
            if (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) {
              day = 32;

            } else if (mes == 2) {
              day = 29
            } else {
              day = 31
            }
            auxiliarLoopDecrementer = 0
          } else {
            let aux2 = year.toString() + "-" + month + "-" + (day - auxiliarLoopDecrementer).toString()
            const documentReference = doc(db, aux2, "Posto 1")
            const documentSnapshot = await getDoc(documentReference)
            if (documentSnapshot.exists()) {
              auxiliarLoop += documentSnapshot.get(nameData)
              auxiliarAverageForLoop++;

            } else {
              //console.log("Falha no Graphics Function")
            }
          }
          auxiliarLoopDecrementer++;
        }
        let AverageValueDateParammed = (auxiliarLoop / auxiliarAverageForLoop)
        setValorPosto1(AverageValueDateParammed)
      }
    }
  }
  async function SetTimedValues2ndTem(dateParam, nameData) {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const collectionReference = collection(db, "2023-06-26")
    const QuerySnapshot = await getDocs(collectionReference)
    if (dateParam >= 7) {
      if (QuerySnapshot.empty) {
        console.log("Teste unpassed");
      } else {
        let auxiliarLoop = 0
        let auxiliarTesterLoop = 26
        let auxiliarAverageForLoop = 0
        let auxiliarLoopDecrementer = 0
        const data = new Date();
        // Pegar o ano atual usando o método getFullYear
        var day = data.getDate();
        const year = data.getFullYear();
        var mes = data.getMonth() + 1;
        // Mostrar o ano atual no console
        var month = mes.toString().padStart(2, "0");


        for (let i = 0; i <= dateParam; i++) {

          if ((day - i) < 1) {
            mes--;
            month = mes.toString().padStart(2, "0")
            if (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) {
              day = 32;

            } else if (mes == 2) {
              day = 29
            } else {
              day = 31
            }
            auxiliarLoopDecrementer = 0
          } else {
            let aux2 = year.toString() + "-" + month + "-" + (day - auxiliarLoopDecrementer).toString()
            const documentReference = doc(db, aux2, "Posto 2")
            const documentSnapshot = await getDoc(documentReference)
            if (documentSnapshot.exists()) {
              auxiliarLoop += documentSnapshot.get(nameData)
              auxiliarAverageForLoop++;

            } else {
              //console.log("Falha no Graphics Function")
            }
          }
          auxiliarLoopDecrementer++;
        }
        let AverageValueDateParammed = (auxiliarLoop / auxiliarAverageForLoop)
        setValorPosto2(AverageValueDateParammed)
      }
    }
  }
  async function SetTimedValues3rdTem(dateParam, nameData) {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const collectionReference = collection(db, "2023-06-26")
    const QuerySnapshot = await getDocs(collectionReference)
    if (dateParam >= 7) {
      if (QuerySnapshot.empty) {
        console.log("Teste unpassed");
      } else {
        let auxiliarLoop = 0
        let auxiliarTesterLoop = 26
        let auxiliarAverageForLoop = 0
        let auxiliarLoopDecrementer = 0
        const data = new Date();
        // Pegar o ano atual usando o método getFullYear
        var day = data.getDate();
        const year = data.getFullYear();
        var mes = data.getMonth() + 1;
        // Mostrar o ano atual no console
        var month = mes.toString().padStart(2, "0");


        for (let i = 0; i <= dateParam; i++) {

          if ((day - i) < 1) {
            mes--;
            month = mes.toString().padStart(2, "0")
            if (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) {
              day = 32;

            } else if (mes == 2) {
              day = 29
            } else {
              day = 31
            }
            auxiliarLoopDecrementer = 0
          } else {
            let aux2 = year.toString() + "-" + month + "-" + (day - auxiliarLoopDecrementer).toString()

            const documentReference = doc(db, aux2, "Posto 3")
            const documentSnapshot = await getDoc(documentReference)
            if (documentSnapshot.exists()) {
              auxiliarLoop += documentSnapshot.get(nameData)
              auxiliarAverageForLoop++;

            } else {
              //console.log("Falha no Graphics Function")
            }
          }
          auxiliarLoopDecrementer++;
        }
        let AverageValueDateParammed = (auxiliarLoop / auxiliarAverageForLoop)
        setValorPosto3(AverageValueDateParammed)
      }
    }
  }
  async function SetTimedValues4thTem(dateParam, nameData) {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const collectionReference = collection(db, "2023-06-26")
    const QuerySnapshot = await getDocs(collectionReference)
    if (dateParam >= 7) {
      if (QuerySnapshot.empty) {
        console.log("Teste unpassed");
      } else {
        let auxiliarLoop = 0
        let auxiliarTesterLoop = 26
        let auxiliarAverageForLoop = 0
        let auxiliarLoopDecrementer = 0
        const data = new Date();
        // Pegar o ano atual usando o método getFullYear
        var day = data.getDate();
        const year = data.getFullYear();
        var mes = data.getMonth() + 1;
        // Mostrar o ano atual no console
        var month = mes.toString().padStart(2, "0");


        for (let i = 0; i <= dateParam; i++) {

          if ((day - i) < 1) {
            mes--;
            month = mes.toString().padStart(2, "0")
            if (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) {
              day = 32;

            } else if (mes == 2) {
              day = 29
            } else {
              day = 31
            }
            auxiliarLoopDecrementer = 0
          } else {
            let aux2 = year.toString() + "-" + month + "-" + (day - auxiliarLoopDecrementer).toString()

            const documentReference = doc(db, aux2, "Posto 4")
            const documentSnapshot = await getDoc(documentReference)
            if (documentSnapshot.exists()) {
              auxiliarLoop += documentSnapshot.get(nameData)
              auxiliarAverageForLoop++;

            } else {
              //console.log("Falha no Graphics Function")
            }
          }
          auxiliarLoopDecrementer++;
        }
        let AverageValueDateParammed = (auxiliarLoop / auxiliarAverageForLoop)
        setValorPosto4(AverageValueDateParammed)
      }
    }
  }
  async function SetTimedValues1stPh(dateParam, nameData) {

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const collectionReference = collection(db, "2023-06-26")
    const QuerySnapshot = await getDocs(collectionReference)
    if (dateParam >= 7) {
      if (QuerySnapshot.empty) {
        //console.log("Teste unpassed");
      } else {
        //console.log("Teste passed")
        let auxiliarLoop = 0
        let auxiliarTesterLoop = 26
        let auxiliarAverageForLoop = 0
        let auxiliarLoopDecrementer = 0
        const data = new Date();
        // Pegar o ano atual usando o método getFullYear
        var day = data.getDate();
        const year = data.getFullYear();
        var mes = data.getMonth() + 1;
        // Mostrar o ano atual no console
        var month = mes.toString().padStart(2, "0");


        for (let i = 0; i <= dateParam; i++) {

          if ((day - i) < 1) {
            mes--;
            month = mes.toString().padStart(2, "0")
            if (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) {
              day = 32;

            } else if (mes == 2) {
              day = 29
            } else {
              day = 31
            }
            auxiliarLoopDecrementer = 0
          } else {
            let aux2 = year.toString() + "-" + month + "-" + (day - auxiliarLoopDecrementer).toString()
            const documentReference = doc(db, aux2, "Posto 1")
            const documentSnapshot = await getDoc(documentReference)
            if (documentSnapshot.exists()) {
              auxiliarLoop += documentSnapshot.get(nameData)
              auxiliarAverageForLoop++;

            } else {
              //console.log("Falha no Graphics Function")
            }
          }
          auxiliarLoopDecrementer++;
        }
        let AverageValueDateParammed = (auxiliarLoop / auxiliarAverageForLoop)
        setValorPosto1Ph(AverageValueDateParammed)
      }
    }
  }
  async function SetTimedValues2ndPh(dateParam, nameData) {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const collectionReference = collection(db, "2023-06-26")
    const QuerySnapshot = await getDocs(collectionReference)
    if (dateParam >= 7) {
      if (QuerySnapshot.empty) {
        console.log("Teste unpassed");
      } else {
        let auxiliarLoop = 0
        let auxiliarTesterLoop = 26
        let auxiliarAverageForLoop = 0
        let auxiliarLoopDecrementer = 0
        const data = new Date();
        // Pegar o ano atual usando o método getFullYear
        var day = data.getDate();
        const year = data.getFullYear();
        var mes = data.getMonth() + 1;
        // Mostrar o ano atual no console
        var month = mes.toString().padStart(2, "0");


        for (let i = 0; i <= dateParam; i++) {

          if ((day - i) < 1) {
            mes--;
            month = mes.toString().padStart(2, "0")
            if (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) {
              day = 32;

            } else if (mes == 2) {
              day = 29
            } else {
              day = 31
            }
            auxiliarLoopDecrementer = 0
          } else {
            let aux2 = year.toString() + "-" + month + "-" + (day - auxiliarLoopDecrementer).toString()
            const documentReference = doc(db, aux2, "Posto 2")
            const documentSnapshot = await getDoc(documentReference)
            if (documentSnapshot.exists()) {
              auxiliarLoop += documentSnapshot.get(nameData)
              auxiliarAverageForLoop++;

            } else {
              //console.log("Falha no Graphics Function")
            }
          }
          auxiliarLoopDecrementer++;
        }
        let AverageValueDateParammed = (auxiliarLoop / auxiliarAverageForLoop)
        setValorPosto2Ph(AverageValueDateParammed)
      }
    }
  }
  async function SetTimedValues3rdPh(dateParam, nameData) {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const collectionReference = collection(db, "2023-06-26")
    const QuerySnapshot = await getDocs(collectionReference)
    if (dateParam >= 7) {
      if (QuerySnapshot.empty) {
        console.log("Teste unpassed");
      } else {
        let auxiliarLoop = 0
        let auxiliarTesterLoop = 26
        let auxiliarAverageForLoop = 0
        let auxiliarLoopDecrementer = 0
        const data = new Date();
        // Pegar o ano atual usando o método getFullYear
        var day = data.getDate();
        const year = data.getFullYear();
        var mes = data.getMonth() + 1;
        // Mostrar o ano atual no console
        var month = mes.toString().padStart(2, "0");


        for (let i = 0; i <= dateParam; i++) {

          if ((day - i) < 1) {
            mes--;
            month = mes.toString().padStart(2, "0")
            if (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) {
              day = 32;

            } else if (mes == 2) {
              day = 29
            } else {
              day = 31
            }
            auxiliarLoopDecrementer = 0
          } else {
            let aux2 = year.toString() + "-" + month + "-" + (day - auxiliarLoopDecrementer).toString()

            const documentReference = doc(db, aux2, "Posto 3")
            const documentSnapshot = await getDoc(documentReference)
            if (documentSnapshot.exists()) {
              auxiliarLoop += documentSnapshot.get(nameData)
              auxiliarAverageForLoop++;

            } else {
              //console.log("Falha no Graphics Function")
            }
          }
          auxiliarLoopDecrementer++;
        }
        let AverageValueDateParammed = (auxiliarLoop / auxiliarAverageForLoop)
        setValorPosto3Ph(AverageValueDateParammed)
      }
    }
  }
  async function SetTimedValues4thPh(dateParam, nameData) {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const collectionReference = collection(db, "2023-06-26")
    const QuerySnapshot = await getDocs(collectionReference)
    if (dateParam >= 7) {
      if (QuerySnapshot.empty) {
        console.log("Teste unpassed");
      } else {
        let auxiliarLoop = 0
        let auxiliarTesterLoop = 26
        let auxiliarAverageForLoop = 0
        let auxiliarLoopDecrementer = 0
        const data = new Date();
        // Pegar o ano atual usando o método getFullYear
        var day = data.getDate();
        const year = data.getFullYear();
        var mes = data.getMonth() + 1;
        // Mostrar o ano atual no console
        var month = mes.toString().padStart(2, "0");


        for (let i = 0; i <= dateParam; i++) {

          if ((day - i) < 1) {
            mes--;
            month = mes.toString().padStart(2, "0")
            if (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12) {
              day = 32;

            } else if (mes == 2) {
              day = 29
            } else {
              day = 31
            }
            auxiliarLoopDecrementer = 0
          } else {
            let aux2 = year.toString() + "-" + month + "-" + (day - auxiliarLoopDecrementer).toString()

            const documentReference = doc(db, aux2, "Posto 4")
            const documentSnapshot = await getDoc(documentReference)
            if (documentSnapshot.exists()) {
              auxiliarLoop += documentSnapshot.get(nameData)
              auxiliarAverageForLoop++;

            } else {
              //console.log("Falha no Graphics Function")
            }
          }
          auxiliarLoopDecrementer++;
        }
        let AverageValueDateParammed = (auxiliarLoop / auxiliarAverageForLoop)
        setValorPosto4Ph(AverageValueDateParammed)
      }
    }
  }
  async function callSetterTem(dateParam, nameData) {

    SetTimedValues1stTem(dateParam, nameData);
    SetTimedValues2ndTem(dateParam, nameData);
    SetTimedValues3rdTem(dateParam, nameData);
    SetTimedValues4thTem(dateParam, nameData);

  }

  async function callSetterPh(dateParam, nameData) {

    SetTimedValues1stPh(dateParam, nameData);
    SetTimedValues2ndPh(dateParam, nameData);
    SetTimedValues3rdPh(dateParam, nameData);
    SetTimedValues4thPh(dateParam, nameData);

  }

  google.charts.load('current', { 'packages': ['corechart'] })
  google.charts.setOnLoadCallback(drawChart)

  function drawChart() {
    //graficoAlcalinidade()
    graficoPh()
    graficoTemperatura()
  }

  //   function graficoAlcalinidade() {
  //     const data = google.visualization.arrayToDataTable([
  //       ['Dia', 'Alcalinidade'],
  //       ['1', 15],
  //       ['2', 7],
  //       ['3', 9],
  //       ['4', 12]
  //     ])

  //     const options = {
  //       title: 'Alcalinidade nas últimas 4 semanas',
  //       hAxis: { title: 'Semanas', titleTextStyle: { color: '#00ff00' } },
  //       vAxis: { minValue: 0 }
  //     }

  //     const chart = new google.visualization.AreaChart(document.getElementById('grafico-alcalinidade'))
  //     chart.draw(data, options)
  //   }

  function graficoPh() {
    const data = google.visualization.arrayToDataTable([
      ['Dia', 'PH'],
      ['1', ValorPosto1Ph],
      ['2', ValorPosto2Ph],
      ['3', ValorPosto3Ph],
      ['4', ValorPosto4Ph]
    ]);

    const options = {
      title: 'PH',
      hAxis: { title: 'Postos de Coleta', titleTextStyle: { color: '#green' } },
      vAxis: { minValue: 0, maxValue: 14 },
      legend: { position: 'bottom' },
      colors: ['green']
    };

    const chart = new google.visualization.AreaChart(document.getElementById('grafico-ph'));
    chart.draw(data, options);
  }

  function graficoTemperatura() {
    const data = google.visualization.arrayToDataTable([
      ['Dia', 'Temperatura'],
      ['1', valorPosto1],
      ['2', valorPosto2],
      ['3', valorPosto3],
      ['4', valorPosto4]
    ]);

    const options = {
      title: 'Temperatura',
      hAxis: { title: 'Postos de Coleta', titleTextStyle: { color: '#f00' } },
      vAxis: { minValue: 0, maxValue: 45 },
      legend: { position: 'bottom' },
      colors: ['red']
    };

    const chart = new google.visualization.AreaChart(document.getElementById('grafico-temperatura'));
    chart.draw(data, options);
  }

  return (
    <section id="graficos">
      <div className='grafico-container'>
        <div className='grafico' id="grafico-temperatura"></div>
        <nav className='nav-grafico'>
          <button type='button' onClick={() => { callSetterTem(7, "Temperatura") }}>1 semana</button>
          <button type='button' onClick={() => { callSetterTem(14, "Temperatura") }}>2 semanas</button>
          <button type='button' onClick={() => { callSetterTem(30, "Temperatura") }}>1 mês</button>
        </nav>
      </div>
      <div className='grafico-container'>
        <div className='grafico' id="grafico-ph"></div>
        <nav className='nav-grafico'>
          <button type='button' onClick={() => { callSetterPh(7, "Ph") }}>1 semana</button>
          <button type='button' onClick={() => { callSetterPh(14, "Ph") }}>2 semanas</button>
          <button type='button' onClick={() => { callSetterPh(30, "Ph") }}>1 mês</button>
        </nav>
      </div>
    </section>
  )
}

export default Graficos