// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "./Counter.sol"; // Assurez-vous que le fichier Counter.sol est dans le même dossier ou ajustez le chemin.

contract CounterFactory {
    // Liste des adresses des contrats Counter déployés
    address[] public counters;

    // Événement pour signaler le déploiement d'un nouveau Counter
    event CounterCreated(
        address indexed counterAddress,
        address indexed creator
    );

    // Fonction pour déployer un nouveau contrat Counter
    function createCounter() public {
        Counter newCounter = new Counter();
        counters.push(address(newCounter));

        emit CounterCreated(address(newCounter), msg.sender);
    }

    function getCounters() public view returns (address[] memory) {
        return counters;
    }
}
