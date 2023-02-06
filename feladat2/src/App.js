function App() {
  return (
    <>
      <div className="m-5">
      <h1>Az antikvárium története</h1>
      <p>Az antikváriumot 1901-ben alapították, még az Osztrák–Magyar Monarchia idején. Magát az épületet többször újjá kellet építeni, ez azonban lehetőséget adott a megújításra, korszerűsítésre. A jelenlegi épület 2019-ben lett felújítva.</p>
      <h2>Hírességek, akik itt jártak</h2>

      <div className="hiressegek row m-5">

          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="card" style={{width: "18rem"}}>
              <div className="card-body">
                <h3 className="card-title">Ady Endre</h3>
                <p className="card-text">Többször is kikölcsönözte Deák Ferenc műveit</p>
                <a href="https://hu.wikipedia.org/wiki/Ady_Endre">Wikipedia</a>
              </div>
          </div>
        </div>

      
      <div className="col-sm-12 col-md-4 col-lg-4">
      <div className="card" style={{width: "18rem"}}>
        <div className="card-body">
          <h3 className="card-title">Móra Ferenc</h3>
          <p className="card-text">Az Én Újságom c. gyermeklapba írt művei közül 50-nek a kéziratát az antikváriumnak adományozta</p>
          <a href="https://hu.wikipedia.org/wiki/Móra_Ferenc">Wikipedia</a>
        </div>
      </div>
      </div>
     

      
      <div className="col-sm-12 col-md-4 col-lg-4">
      <div className="card" style={{width: "18rem"}}>
        <div className="card-body">
          <h3 className="card-title">Névtelen adományozó</h3>
          <p className="card-text">1992-ben 500 000 Ft-tal támogatta az antikvárium működését</p>
          <a href="https://hu.wikipedia.org/wiki/Móra_Ferenc" >Wikipedia</a>
        </div>
      </div>
      </div>
      
      
      </div>

      <div>
        <h2>Új híresség jelzése</h2>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Wikipedia link</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Leiras</label>
          <input type="text" class="form-control p-5" id="exampleInputPassword1" />
        </div>
        <button type="submit" class="btn btn-primary mt-3">Elkuld</button>
      </form>
      </div>

    </div>
    </>
  );
}

export default App;
