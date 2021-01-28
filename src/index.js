fetch("http://localhost:3000/hogs")
  .then((resp) => resp.json())
  .then((hogs) => {
    hogs.forEach((hog) => {
      const { id, name, specialty, greased, image } = hog;
      const weight =
        hog[
          "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"
        ];
      const medal = hog["highest medal achieved"];
      new Hog(id, name, specialty, greased, weight, medal, image);
    });
  });
