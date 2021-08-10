import React from 'react';

const sectionThree = (props) => {
    // Sekcja 3: sekcja o standardowej dla frameworka szerokości z 4 boxami obok siebie. Boxy mają się stackować: na „medium” do 2x2, na „small” do 1x4. Boxy mają zawierać polskie znaki, które powinny wyświetlać się prawidłowo w przeglądarce (2). Grid boxy powinny zawierać różną ilość treści, ale równać się do tej samej wysokości – wykorzystać możliwości biblioteki! (2)

    // Rozbudowa sekcji 3: w jednym z boxów wstaw kolejny grid, podzielony na 2 kolumny. (2)
    
    return (
        <section id="section3" className="container h-100 w-100 d-flex p-2" style={{minHeight: '100vh'}}>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-2">
               <div className="col bg-primary ">
                ĄĄĄĘĆ. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio magni dignissimos consequuntur officiis esse nobis sit placeat quibusdam? Ad fuga nostrum id voluptatum architecto sequi quisquam cumque corrupti nulla illum!
               </div>
               <div className="col bg-secondary ">
               ĄĄĄĘĆLorem ipsum dolor sit amet consectetur adipisicing elit. 
               </div>
               <div className="col bg-success ">
               ĄĄĄĘĆChrząszcz brzmi w trzcinie.
               </div>
               <div className="col bg-warning ">
                <div className="row">
                    <div className="col">ĄĘĆ</div>
                    <div className="col">Lorem ipsum dolor sit amet consectetur adipisicing elit. </div>
                </div>
               </div>
            </div>

            {/* <div className="row row-flex">
               <div className="col col-sm-2 col-md-4 bg-primary">
                ĄĄĄĘĆ. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio magni dignissimos consequuntur officiis esse nobis sit placeat quibusdam? Ad fuga nostrum id voluptatum architecto sequi quisquam cumque corrupti nulla illum!
               </div>
               <div className="col col-sm-2 col-md-4 bg-secondary">
               ĄĄĄĘĆLorem ipsum dolor sit amet consectetur adipisicing elit. 
               </div>
               <div className="col col-sm-2 col-md-4 bg-success">
               ĄĄĄĘĆChrząszcz brzmi w trzcinie.
               </div>
               <div className="col col-sm-2 col-md-4 bg-warning">
               ĄĄĄĘĆHmmm?
               </div>
            </div> */}

        </section>
    )
}

export default sectionThree;