import { useState } from 'react';

const AdoptionCenters = () => {
  const [adoptionCenters] = useState([
    {
      "NGO Name": "Paws of Love Dog Rescue",
      "NGO Details": "Paws of Love Dog Rescue is a non-profit organization committed to rescuing and rehoming dogs in need. Our mission is to provide a safe haven for abandoned, abused, and neglected dogs, giving them a second chance at a happy life. We believe that every dog deserves a loving home, and we work tirelessly to match our furry friends with their perfect forever families.",
      "NGO Photo": "../../../public/Image1.jpg",
      "contact": "134-456-7890",
      "Pets": [
        { "Dog Breed": "Chihuahua" },
        { "Dog Breed": "beagle" },
        { "Dog Breed": "PoodNorwegian_elkhoundle" },
        { "Dog Breed": "Weimaraner" }
      ]
    },
    {
      "NGO Name": "Happy Tails Animal Shelter",
      "NGO Details": "Happy Tails Animal Shelter is a no-kill shelter dedicated to providing care and compassion to homeless dogs. Our shelter provides a safe and loving environment for dogs of all ages and breeds while they await their forever homes. We believe that every dog deserves a chance at happiness, and we strive to make that possible through our adoption and rehabilitation programs.",
      "NGO Photo": "../../../public/Image2.jpg",
      "contact": "435-456-7890",
      "Pets": [
        { "Dog Breed": "otterhound" },
        { "Dog Breed": "English_foxhound" },
        { "Dog Breed": "Border_terrier" },
        { "Dog Breed": "Dandie_Dinmont" }
      ]
    },
    {
      "NGO Name": "Woof Haven Rescue",
      "NGO Details": "Woof Haven Rescue is dedicated to rescuing and rehoming dogs of all breeds. Our team of volunteers works tirelessly to provide medical care, training, and love to dogs in need. Through our adoption events and community outreach, we aim to raise awareness about the importance of pet adoption and responsible pet ownership.",
      "NGO Photo": "../../../public/Image3.jpg",
      "contact": "345-456-7890",
      "Pets": [
        { "Dog Breed": "clumber" },
        { "Dog Breed": "Rottweiler" },
        { "Dog Breed": "boxer" },
        { "Dog Breed": "pug" }
      ]
    },
    {
      "NGO Name": "Rescue Rangers",
      "NGO Details": "Rescue Rangers is a volunteer-based organization committed to rescuing, rehabilitating, and rehoming dogs in need. Our dedicated team of volunteers works tirelessly to provide medical care, foster homes, and training to dogs in our care. We believe that every dog deserves a chance at a loving home, and we are dedicated to making that a reality.",
      "NGO Photo": "../../../public/Image4.jpg",
      "contact": "345-986-7890",
      "Pets": [
        { "Dog Breed": "keeshond" },
        { "Dog Breed": "Yorkshire Terrier" },
        { "Dog Breed": "African_hunting_dog" },
        { "Dog Breed": "flat-coated_retriever" }
      ]
    },
    {
      "NGO Name": "Second Chance Dog Rescue",
      "NGO Details": "Second Chance Dog Rescue is dedicated to giving dogs a second chance at a happy and healthy life. We rescue dogs from overcrowded shelters and provide them with medical care, training, and love until they find their forever homes. Our goal is to make a positive impact on the lives of both dogs and adopters, creating lasting bonds of love and companionship.",
      "NGO Photo": "../../../public/Image5.jpeg",
      "contact": "985-456-7890",
      "Pets": [
        { "Dog Breed": "bull_mastiff" },
        { "Dog Breed": "Shetland Sheepdog" },
        { "Dog Breed": "Tibetan_mastiff" },
        { "Dog Breed": "miniature_poodle" }
      ]
    },
    {
      "NGO Name": "Forever Friends Dog Rescue",
      "NGO Details": "Forever Friends Dog Rescue is dedicated to rescuing and rehoming dogs of all breeds and sizes. Our mission is to find loving forever homes for every dog in our care, providing them with the love, care, and attention they deserve. We believe that every dog is deserving of a second chance, and we work tirelessly to make that a reality.",
      "NGO Photo": "../../../public/Image6.jpeg",
      "contact": "345-456-7890",
      "Pets": [
        { "Dog Breed": "Samoyed" },
        { "Dog Breed": "Great_Pyrenees" },
        { "Dog Breed": "Leonberg" },
        { "Dog Breed": "basenji" }
      ]
    },
    {
      "NGO Name": "Furry Friends Rescue",
      "NGO Details": "Furry Friends Rescue is a non-profit organization dedicated to rescuing, fostering, and rehoming dogs in need. Our dedicated team of volunteers provides medical care, socialization, and love to dogs in our care. We believe that every dog deserves a loving home, and we are committed to finding the perfect match for each furry friend.",
      "NGO Photo": "../../../public/Image7.jpg",
      "contact": "234-343-2422",
      "Pets": [
        { "Dog Breed": "Saint_Bernard" },
        { "Dog Breed": "French_bulldog" },
        { "Dog Breed": "Appenzeller" },
        { "Dog Breed": "Bernese_mountain_dog" }
      ]
    },
    {
      "NGO Name": "Home for Paws",
      "NGO Details": "Home for Paws is a foster-based rescue dedicated to finding loving homes for dogs in need. We rescue dogs from shelters and provide them with temporary foster care until they find their forever families. Our goal is to give each dog the love, care, and attention they need to thrive, while also educating the community about responsible pet ownership.",
      "NGO Photo": "../../../public/Image8.jpeg",
      "contact": "143-456-7890",
      "Pets": [
        { "Dog Breed": "Rottweiler" },
        { "Dog Breed": "Shetland_sheepdog" },
        { "Dog Breed": "Old_English_sheepdog" },
        { "Dog Breed": "kelpie" }
      ]
    },
    {
      "NGO Name": "Loving Hearts Pet Rescue",
      "NGO Details": "Loving Hearts Pet Rescue is dedicated to rescuing and rehoming dogs of all ages and breeds. Our mission is to provide a safe and loving environment for dogs in need, while also educating the community about the importance of pet adoption. Through our adoption events, volunteer programs, and community outreach, we aim to make a difference in the lives of dogs and their adopters.",
      "NGO Photo": "../../../public/Image9.jpg",
      "contact": "123-456-7890",
      "Pets": [
        { "Dog Breed": "Sussex_spaniel" },
        { "Dog Breed": "English_springer" },
        { "Dog Breed": "soft-coated_wheaten_terrier" },
        { "Dog Breed": "giant_schnauzer" }
      ]
    },
  
  ]);

  const renderCard = (center, index) => {
    return (
      <div key={index} className="max-w-xs rounded overflow-hidden shadow-lg border hover:shadow-2xl transition duration-300">
        <div className="flex justify-center items-center h-72">
          <img src={center['NGO Photo']} alt={center['NGO Name']} className="h-full" />
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-customBlue">NGO Name: {center['NGO Name']}</div>
          <p className="text-gray-700 text-base mb-2"><strong>NGO Details:</strong> {center['NGO Details']}</p>
          <p className="text-gray-700 text-base mb-2"><strong>Contact Details:</strong> {center['contact']}</p>
          <h3 className="text-lg font-semibold mt-4 mb-2">Dogs Available</h3>
          <ul>
            {center.Pets.map((dog, dogIndex) => (
              <li key={dogIndex}>{dog['Dog Breed']}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center my-8 text-customBlue">Adoption Centers</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {adoptionCenters.map(renderCard)}
      </div>
    </div>
  );
};

export default AdoptionCenters;
