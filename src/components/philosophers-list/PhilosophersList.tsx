import React from "react";
import { PhilType } from "types/types";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const chunkify = <T extends any>(array: T[], fraction: number) => {
  const chunk = Math.ceil(array.length / fraction);
  const items: T[][] = [];

  for (let i = 0; i < fraction; i++) {
    let chunkStart = Math.ceil(chunk * i);
    const newArray = array.slice(chunkStart, chunkStart + chunk);

    items.push(newArray);
  }

  return items;
};

const PhilosophersList = ({
  philosophers,
  fraction,
}: {
  philosophers: PhilType[];
  fraction: number;
}) => {
  return (
    <>
      {chunkify(philosophers, fraction).map((chunk, i) => (
        <Col key={i}>
          {chunk.map(({ dates, lname, fname, topname }) => (
            <Link
              key={dates}
              to={
                topname
                  ? `/philosophers/${fname}_${topname}`
                  : lname
                  ? `/philosophers/${lname}_${fname}`
                  : `/philosophers/${fname}`
              }
            >
              <Button className="my-1" variant="light">
                {topname
                  ? `${fname} ${topname} (${dates})`
                  : lname
                  ? `${lname}, ${fname} (${dates})`
                  : `${fname} (${dates})`}
              </Button>
              <br />
            </Link>
          ))}
        </Col>
      ))}
    </>
  );
};

export default PhilosophersList;
