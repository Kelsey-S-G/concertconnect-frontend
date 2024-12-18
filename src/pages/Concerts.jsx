import { useState } from "react";
import PropTypes from "prop-types";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/cards/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "../components/cards/card.jsx";
import { Calendar, MapPin, Clock, ChevronRight, DollarSign } from "lucide-react";
import Cart from "./Cart";
import { upcomingConcerts, pastConcerts } from "../data/Data";

const Concerts = () => {
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const addToCart = (concert) => {
    setCart((prevCart) => [...prevCart, concert]);
    console.log("Added to cart:", concert);
  };

  const toggleFavorite = (concert) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.some((fav) => fav.id === concert.id)) {
        return prevFavorites.filter((fav) => fav.id !== concert.id);
      } else {
        return [...prevFavorites, concert];
      }
    });
  };

  const ConcertCard = ({ concert, isPast }) => (
    <Card className="group hover:shadow-lg transition-shadow duration-300 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
      <CardHeader className="space-y-1 pl-6">
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold uppercase tracking-wider text-primary">
            {concert.genre}
          </span>
          {!isPast && (
            <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary bg-red-100 rounded-full">
              Upcoming
            </span>
          )}
        </div>
        <CardTitle className="text-2xl font-extrabold flex items-center group-hover:text-primary transition-colors">
          {concert.name}
        </CardTitle>
        <div className="flex items-center space-x-2 text-sm text-gray-500">
          <Calendar className="w-4 h-4" />
          <span>{formatDate(concert.date)}</span>
          <MapPin className="w-4 h-4" />
          <span>{concert.location}</span>
          <Clock className="w-4 h-4" />
          <span>{concert.time}</span>
          <DollarSign className="w-4 h-4" />
          <span>{concert.price}</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-gray-700">
            <MapPin className="h-5 w-5 text-primary" />
            <span className="font-medium">{concert.location}</span>
          </div>
          <div className="flex items-center gap-3 text-gray-700">
            <DollarSign className="h-5 w-5 text-primary" />
            <span className="font-medium">{concert.price}</span>
          </div>
          {!isPast ? (
            <>
              <button
                onClick={() => addToCart(concert)}
                className="bg-secondary text-white px-4 py-2 rounded-md"
              >
                Add to Cart
              </button>
              <button
                onClick={() => toggleFavorite(concert)}
                className="bg-yellow-500 text-white px-4 py-2 rounded-md ml-2"
              >
                {favorites.some((fav) => fav.id === concert.id) ? "Unfavorite" : "Favorite"}
              </button>
            </>
          ) : (
            <button className="text-primary flex items-center space-x-1">
              <span>View Details</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </CardContent>
    </Card>
  );

  ConcertCard.propTypes = {
    concert: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      details: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    }).isRequired,
    isPast: PropTypes.bool,
  };

  return (
    <div>
      <Tabs defaultValue="upcoming">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming Concerts</TabsTrigger>
          <TabsTrigger value="past">Past Concerts</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming">
          {upcomingConcerts.map((concert) => (
            <ConcertCard key={concert.id} concert={concert} />
          ))}
        </TabsContent>
        <TabsContent value="past">
          {pastConcerts.map((concert) => (
            <ConcertCard key={concert.id} concert={concert} isPast />
          ))}
        </TabsContent>
      </Tabs>
      <Cart cart={cart} />
    </div>
  );
};

export default Concerts;